package com.urbanisation.ldap.beans;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="privilegebd")
public class PrivilegeBD {

	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	public String privilege;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade = CascadeType.MERGE)
	//@JsonIgnore(value = Access.WRITE_ONLY)
	@JsonProperty(access = Access.WRITE_ONLY) 
	@JoinColumn(name="role_id")
	private RoleBD role;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPrivilege() {
		return privilege;
	}

	public void setPrivilege(String privilege) {
		this.privilege = privilege;
	}

	public RoleBD getRole() {
		return role;
	}

	public void setRole(RoleBD role) {
		this.role = role;
	}
	
	
}
