package com.project.leisure.dogyeom.totalPrice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TotalPriceRepository extends JpaRepository<TotalPrice, Long> {
    @Query(value = "CREATE TEMPORARY TABLE temp_total_price AS SELECT * FROM total_price", nativeQuery = true)
    void createTempTable();
    
    List<TotalPrice> findByTotalPrice(String totalPrice);
}