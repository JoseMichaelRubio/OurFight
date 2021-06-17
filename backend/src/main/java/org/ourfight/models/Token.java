package org.ourfight.models;

public class Token {
    private final long userId;
    private final Role userRole;

    public Token(long userId, Role userRole) {
        this.userId = userId;
        this.userRole = userRole;
    }

    public long getUserId() {
        return userId;
    }

    public Role getUserRole() {
        return userRole;
    }
}
