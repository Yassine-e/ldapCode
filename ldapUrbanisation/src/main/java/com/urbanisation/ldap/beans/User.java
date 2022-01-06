package com.urbanisation.ldap.beans;

import javax.naming.Name;

import org.springframework.ldap.odm.annotations.Attribute;
import org.springframework.ldap.odm.annotations.Entry;
import org.springframework.ldap.odm.annotations.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entry(objectClasses= {"inetOrgPerson"})
public class User {
	
	@Id
	@JsonIgnore
	private Name dn;
	@Attribute(name="cn")
	private String fullname;
	@Attribute(name="sn")
	private String lastname;
	@Attribute(name="displayName")
	private String displayname;
	@Attribute(name="mail")
	private String mail;
	@Attribute(name="uid")
	private String uid;
	@Attribute(name="userPassword")
	private String pass;
	@Attribute(name="gidNumber")
	private String group;
	
	
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public Name getDn() {
		return dn;
	}
	public void setDn(Name dn) {
		this.dn = dn;
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
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	
	
	
	

}
