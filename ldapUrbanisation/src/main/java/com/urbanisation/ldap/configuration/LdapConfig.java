package com.urbanisation.ldap.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.ldap.repository.config.EnableLdapRepositories;
import org.springframework.ldap.core.AuthenticationSource;
import org.springframework.ldap.core.support.LdapContextSource;

@Configuration
@EnableLdapRepositories
public class LdapConfig {

	
	@Bean
	public LdapContextSource ldapContextSource() {
		LdapContextSource lcs = new LdapContextSource();
		lcs.setUrl("ldap://192.168.56.104:389");
		lcs.setBase("dc=ensate,dc=uae,dc=ac,dc=ma");
		lcs.setUserDn("cn=admin,dc=ensate,dc=uae,dc=ac,dc=ma");
		lcs.setPassword("123456789");
		return lcs;
	}

}
