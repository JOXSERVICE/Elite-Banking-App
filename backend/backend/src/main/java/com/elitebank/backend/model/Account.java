package com.elitebank.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "accounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private double balance;
    private String currency;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
