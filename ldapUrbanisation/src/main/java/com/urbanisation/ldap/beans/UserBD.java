package com.urbanisation.ldap.beans;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="userbd")
public class UserBD {

	@Id
	public String uid;
	public String fullname;
	public String lastname;
	public String displayname;
	public String mail;
	public String group;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="USERBD_ROLEBD",
			joinColumns= {@JoinColumn(name="userbd_id")},
			inverseJoinColumns= {@JoinColumn(name="rolebd_id")}
			)
	//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	@JsonIgnore
	private List<RoleBD> roles ;
	
	
	
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getDisplayname() {
		return displayname;
	}
	public void setDisplayname(String displayname) {
		this.displayname = displayname;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	public List<RoleBD> getRoles() {
		return roles;
	}
	public void setRoles(List<RoleBD> roles) {
		this.roles = roles;
	}
	
	
	
	
	
}
