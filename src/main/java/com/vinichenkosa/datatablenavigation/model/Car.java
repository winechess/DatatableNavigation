/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.vinichenkosa.datatablenavigation.model;

/**
 *
 * @author vinichenkosa
 */
public class Car {
    
    private String model;
    private String manufacturer;
    private int year;
    private String color;

    public Car(String model, int year, String manufcturer,  String color) {
        this.model = model;
        this.manufacturer = manufcturer;
        this.year = year;
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    
}
