package com.urbanisation.ldap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urbanisation.ldap.beans.PrivilegeBD;

@Repository
public interface PrivilegeBdDAO extends JpaRepository<PrivilegeBD, Long> {

}
