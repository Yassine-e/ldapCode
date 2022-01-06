package com.urbanisation.ldap.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanisation.ldap.beans.User;
import com.urbanisation.ldap.service.LdapService;

@CrossOrigin
@RestController
@RequestMapping("/ldap")
public class LdapProvided {
	
	@Autowired
	private LdapService ldapService;

	@GetMapping("/find")
	public List<User> findAll() {
		return ldapService.findAll();
	}
	

	@GetMapping("/findall")
	public List<User> findPasswords() {
		return ldapService.findPasswords();
	}
//	public List<User> findPasswords(){
//		//String str ="";
//		List<User> lu = ldapService.findAll();
//		List<User> st = new ArrayList<>();
//		for(User u: lu) {
//			User ch = ldapService.AsciToPassword(u);
//			User cc = ldapService.changeGroup(ch);
//			st.add(cc);
//		}
//		
//		return st;
//	}


	@GetMapping("/find/uid/{uid}")
	public User findByUid(@PathVariable("uid") String uid) {
		return ldapService.findByUid(uid);
	}

	


	@PostMapping("/login")
	public String login(@RequestBody User us) {
		return ldapService.login(us);
	}


	@GetMapping("/synchro")
	public int synchro() {
		return ldapService.synchro();
	}

	
	

	
	
	

}
