package com.TechShop.TechShop.repository;

import com.TechShop.TechShop.service.Processors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProcessorsRepository extends JpaRepository<Processors,Long> {
    List<Processors>findAll();
}
