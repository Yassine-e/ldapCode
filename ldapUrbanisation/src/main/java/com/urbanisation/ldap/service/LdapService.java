package com.urbanisation.ldap.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.query.LdapQuery;
import org.springframework.ldap.query.LdapQueryBuilder;
import org.springframework.stereotype.Service;

import com.urbanisation.ldap.beans.User;
import com.urbanisation.ldap.beans.UserBD;
import com.urbanisation.ldap.dao.LdapDAO;

@Service
public class LdapService {
	
	@Autowired
	private LdapDAO ldapDAO;
	
	@Autowired
	private UserBdService userBdService;

	public List<User> findAll() {
		return ldapDAO.findAll();
	}

	public Optional<User> findOne(LdapQuery ldapQuery) {
		return ldapDAO.findOne(ldapQuery);
	}
	
	public List<User> findPasswords(){
		//String str ="";
		List<User> lu = this.findAll();
		List<User> st = new ArrayList<>();
		for(User u: lu) {
			User ch = this.AsciToPassword(u);
			User cc = this.changeGroup(ch);
			st.add(cc);
		}
		
		return st;
	}

	public User findByUid(String uid) {
		Optional<User> u = this.findOne(LdapQueryBuilder.query().where("uid").is(uid));
		User uu = u.isPresent()? u.get():new User();
		if(u.isPresent()) {
			User ch = this.AsciToPassword(uu);
			User cc = this.changeGroup(ch);
			return cc;
		}else {
			return uu;
		}
		
	}
	
	public User AsciToPassword(User u) {
		String str ="";
		String pass = u.getPass();
		String[] pass1 = pass.split(",");
		for(String pa:pass1) {
			int number = Integer.parseInt(pa);
			str += Character.toString((char) number);
		}
		u.setPass(str);
		return u;
		
	}
	
	public User changeGroup(User u) {
		String grp = u.getDn().get(0);
		u.setGroup(grp);
		return u;
	}
	
	public String login(User us) {
		User s = this.findByUid(us.getUid());
		if(s.getUid() == null ) {
			return "BAD CREDENTIALS";
		}
		if(!s.getPass().equals(us.getPass())) {
			return "BAD CREDENTIALS";
		}else if(s.getPass().equals(us.getPass()) && s.getUid().equals(us.getUid())) {
			String uid = s.getUid();
			Optional<UserBD> userbd = userBdService.findById(uid);
			
			return userbd.get().getGroup();
		}
		return "BAD CREDENTIALS";
	}
	
	public int synchro() {
		List<User> usersLdap = this.findPasswords();
		List<UserBD> usersBd = userBdService.findAllWithoutRoles();
		List<UserBD> newUsers = new ArrayList<>();
		for(User u : usersLdap) {
			Optional<UserBD> ubd = userBdService.findByIdWithoutRoles(u.getUid());
			if(!ubd.isPresent()) {
				UserBD nubd = new UserBD();
				nubd.setDisplayname(u.getDisplayname());
				nubd.setFullname(u.getFullname());
				nubd.setGroup(u.getGroup());
				nubd.setLastname(u.getLastname());
				nubd.setMail(u.getMail());
				nubd.setUid(u.getUid());
				newUsers.add(nubd);
			}
			
		}
		userBdService.saveAll(newUsers);
		return newUsers.size();
	}
	

}
