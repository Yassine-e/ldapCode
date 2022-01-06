package com.urbanisation.ldap.dao;

import org.springframework.data.ldap.repository.LdapRepository;
import org.springframework.stereotype.Repository;

import com.urbanisation.ldap.beans.User;

@Repository
public interface LdapDAO extends LdapRepository<User> {

	User findByUid(String uid);
	
	
	
}
