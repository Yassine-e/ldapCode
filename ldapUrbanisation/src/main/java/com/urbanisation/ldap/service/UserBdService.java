package com.urbanisation.ldap.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urbanisation.ldap.beans.PrivilegeBD;
import com.urbanisation.ldap.beans.RoleBD;
import com.urbanisation.ldap.beans.UserBD;
import com.urbanisation.ldap.dao.UserBdDAO;

@Service
public class UserBdService {

	@Autowired
	private UserBdDAO userBdDao;
	
//	@Autowired
//	private LdapProvided ldapProvided;
	
	public List<UserBD> findAllWithoutRoles(){
		return userBdDao.findAll();
	}
	
	public List<UserBD> findAll() {
		List<UserBD> newListUserBD = new ArrayList<>();
		List<UserBD> listUserBD = userBdDao.findAll();
		String roles="";
		for(UserBD userBD : listUserBD){
			roles += userBD.getGroup();
			List<RoleBD> listRoleBD = userBD.getRoles();
			for(RoleBD role : listRoleBD) {
				roles += "," + role.getRole();
			}
			userBD.setGroup(roles);
			newListUserBD.add(userBD);
			roles ="";
		}
		return newListUserBD;
	}

	public Optional<UserBD> findByIdWithoutRoles(String id){
		return userBdDao.findById(id);
	}
	
	public Optional<UserBD> findById(String id) {
		Optional<UserBD> userbd = userBdDao.findById(id);
		if(userbd.isPresent()) {
			String roles= userbd.get().getGroup();
			List<RoleBD> listRoleBD = userbd.get().getRoles();
			for(RoleBD role : listRoleBD) {
				roles += ","+role.getRole();
			}
			userbd.get().setGroup(roles);
		}
		return userbd;
	}
	
	public <S extends UserBD> List<S> saveAll(Iterable<S> entities) {
		return userBdDao.saveAll(entities);
	}
	
	public List<PrivilegeBD> userPrivilege(String uid){
		List<RoleBD> rolesList = this.findByIdWithoutRoles(uid).get().getRoles();
		List<PrivilegeBD> privilegeList = new ArrayList<>();
		for(RoleBD role : rolesList) {
			List<PrivilegeBD> pl = role.getPrivileges();
			for(PrivilegeBD p : pl) {
				privilegeList.add(p);
			}
		}
		return privilegeList;
	}

//	public int synchro() {
//		List<User> usersLdap = ldapProvided.findPasswords();
//		List<UserBD> usersBd = this.findAll();
//		List<UserBD> newUsers = new ArrayList<>();
//		for(User u : usersLdap) {
//			Optional<UserBD> ubd = this.findById(u.getUid());
//			if(!ubd.isPresent()) {
//				UserBD nubd = new UserBD();
//				nubd.setDisplayname(u.getDisplayname());
//				nubd.setFullname(u.getFullname());
//				nubd.setGroup(u.getGroup());
//				nubd.setLastname(u.getLastname());
//				nubd.setMail(u.getMail());
//				nubd.setUid(u.getUid());
//				newUsers.add(nubd);
//			}
//			
//		}
//		saveAll(newUsers);
//		return newUsers.size();
//	}
	
	
}
