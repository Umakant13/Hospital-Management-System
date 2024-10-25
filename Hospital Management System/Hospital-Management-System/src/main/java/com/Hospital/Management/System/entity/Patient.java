package com.Hospital.Management.System.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String name;
	
	@Column(name = "age")
	private String age;
	
	@Column(name = "blood_group")
	private String blood;
	
	@Column(name = "prescription")
	private String prescription;
	
	@Column(name = "dose")
	private String dose;
	
	@Column(name = "fees")
	private String fees;
	
	@Column(name = "urgency")
	private String urgency;
	

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the age
	 */
	public String getAge() {
		return age;
	}

	/**
	 * @param age the age to set
	 */
	public void setAge(String age) {
		this.age = age;
	}

	/**
	 * @return the blood
	 */
	public String getBlood() {
		return blood;
	}

	/**
	 * @param blood the blood to set
	 */
	public void setBlood(String blood) {
		this.blood = blood;
	}

	/**
	 * @return the prescription
	 */
	public String getPrescription() {
		return prescription;
	}

	/**
	 * @param prescription the prescription to set
	 */
	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	/**
	 * @return the dose
	 */
	public String getDose() {
		return dose;
	}

	/**
	 * @param dose the dose to set
	 */
	public void setDose(String dose) {
		this.dose = dose;
	}

	/**
	 * @return the fees
	 */
	public String getFees() {
		return fees;
	}

	/**
	 * @param fees the fees to set
	 */
	public void setFees(String fees) {
		this.fees = fees;
	}

	/**
	 * @return the urgency
	 */
	public String getUrgency() {
		return urgency;
	}

	/**
	 * @param urgency the urgency to set
	 */
	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}

	public Patient(long id, String name, String age, String blood, String prescription, String dose, String fees,
			String urgency) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.blood = blood;
		this.prescription = prescription;
		this.dose = dose;
		this.fees = fees;
		this.urgency = urgency;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}


}
