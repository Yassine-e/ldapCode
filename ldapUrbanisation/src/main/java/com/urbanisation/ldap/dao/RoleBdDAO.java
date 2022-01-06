package com.urbanisation.ldap.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urbanisation.ldap.beans.RoleBD;


@Repository
public interface RoleBdDAO extends JpaRepository<RoleBD, Long> {
	
	
	List<RoleBD> findByRole(String role);
}
