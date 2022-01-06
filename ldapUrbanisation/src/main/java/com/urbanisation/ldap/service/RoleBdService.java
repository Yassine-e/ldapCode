package com.urbanisation.ldap.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urbanisation.ldap.beans.RoleBD;
import com.urbanisation.ldap.beans.UserBD;
import com.urbanisation.ldap.dao.RoleBdDAO;

@Service
public class RoleBdService {
	
	@Autowired
	public RoleBdDAO roleBdDAO;
	
	@Autowired
	public UserBdService userBdService;

	public RoleBD save(RoleBD entity) {
		return roleBdDAO.save(entity);
	}

	public List<RoleBD> findAll() {
		return roleBdDAO.findAll();
	}

	public Optional<RoleBD> findById(Long id) {
		return roleBdDAO.findById(id);
	}

	public void deleteById(Long id) {
		roleBdDAO.deleteById(id);
	}
	
	public String save(RoleBD entity, String uid) {
		String ro = entity.getRole();
		UserBD user = userBdService.findByIdWithoutRoles(uid).get();
		List<RoleBD> roles = user.getRoles();
		if(roles.size()==0) roles = new ArrayList<RoleBD>();
		for(RoleBD r : roles) {
			if(r.getRole().equals(ro)) return "EXISTS";
		}
		roleBdDAO.save(entity);
		return "ADDED";
	}
	
	public String deleteByUid(String uid, String role) {
		List<RoleBD> roleb = roleBdDAO.findByRole(role);
		Optional<UserBD> u = userBdService.findByIdWithoutRoles(uid);
		UserBD user = u.isPresent()? u.get() : new UserBD();
		for(RoleBD r : roleb) {
			List<UserBD> users = r.getUsers();
			for(UserBD us : users) {
				if(us.getUid().equals(uid) && r.getRole().equals(role)) {
					this.deleteById(r.getId());
					return "DELETED";
				}
			}
		}
		return "NOT";
	}
}