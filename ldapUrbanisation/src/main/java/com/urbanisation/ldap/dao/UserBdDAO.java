package com.urbanisation.ldap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urbanisation.ldap.beans.UserBD;

@Repository
public interface UserBdDAO extends JpaRepository<UserBD, String> {

}
