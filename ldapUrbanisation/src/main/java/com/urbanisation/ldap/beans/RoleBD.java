package com.urbanisation.ldap.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="rolebd")
public class RoleBD {

	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	public String role;
	
	@OneToMany(mappedBy="role", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	//@JsonIgnore
	private List<PrivilegeBD> privileges;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="USERBD_ROLEBD", 
			joinColumns = {@JoinColumn(name="rolebd_id")},
			inverseJoinColumns = {@JoinColumn(name="userbd_id")}
			)
	//@JsonIgnore
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private List<UserBD> users;

	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<PrivilegeBD> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(List<PrivilegeBD> privileges) {
		this.privileges = privileges;
	}

	public List<UserBD> getUsers() {
		return users;
	}

	public void setUsers(List<UserBD> users) {
		this.users = users;
	}
	
	
	

}
