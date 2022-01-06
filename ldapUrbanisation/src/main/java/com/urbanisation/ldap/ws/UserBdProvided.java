package com.urbanisation.ldap.ws;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanisation.ldap.beans.PrivilegeBD;
import com.urbanisation.ldap.beans.UserBD;
import com.urbanisation.ldap.service.UserBdService;

@CrossOrigin
@RestController
@RequestMapping("/bd")
public class UserBdProvided {

	@Autowired
	private UserBdService userBdService;

	@GetMapping("/findall")
	public List<UserBD> findAll() {
		return userBdService.findAll();
	}
	
	@GetMapping("/find/id/{id}")
	public Optional<UserBD> findById(@PathVariable("id") String id) {
		return userBdService.findById(id);
	}
	
	@GetMapping("/find/privileges/uid/{uid}")
	public List<PrivilegeBD> userPrivilege(@PathVariable("uid") String uid) {
		return userBdService.userPrivilege(uid);
	}

//	@GetMapping("/synchro")
//	public int synchro() {
//		return userBdService.synchro();
//	}
	
	
	
	
}
