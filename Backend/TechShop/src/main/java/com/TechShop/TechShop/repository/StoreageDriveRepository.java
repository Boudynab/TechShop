package com.TechShop.TechShop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TechShop.TechShop.service.StoreageDrive;

@Repository
public interface StoreageDriveRepository extends JpaRepository<StoreageDrive,Long> {
    List<StoreageDrive>findAll();
}
