package com.urbanisation.ldap.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urbanisation.ldap.beans.PrivilegeBD;
import com.urbanisation.ldap.dao.PrivilegeBdDAO;
import com.urbanisation.ldap.dao.RoleBdDAO;

@Service
public class PrivilegeBdService {
	
	
	@Autowired
	public PrivilegeBdDAO privilegeBdDAO;

	public <S extends PrivilegeBD> S save(S entity) {
		return privilegeBdDAO.save(entity);
	}

	public List<PrivilegeBD> findAll() {
		return privilegeBdDAO.findAll();
	}


	public Optional<PrivilegeBD> findById(Long id) {
		return privilegeBdDAO.findById(id);
	}

	public void deleteById(Long id) {
		privilegeBdDAO.deleteById(id);
	}
	
	
	
	

}
