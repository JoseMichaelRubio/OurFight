package org.ourfight.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import org.ourfight.models.Role;
import org.ourfight.models.Token;
import org.ourfight.models.User;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.security.SignatureException;
import java.util.Date;
import io.jsonwebtoken.Jwts;

public class Tokens {
    static String s = "Key";
    private static final Key key = new SecretKeySpec(DatatypeConverter.parseBase64Binary(s), SignatureAlgorithm.HS256.getJcaName());

    public static String generateTokenString(User user){
        String token = Jwts.builder().setIssuedAt(new Date(System.currentTimeMillis()))
                .setId(user.getId().toString())
                .setSubject(user.getRole().toString()).signWith(key).compact();
        return token;
    }


    public static Token parseToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
            String id = claims.getId();
            String role = claims.getSubject();
            if (id.matches("^\\d{1,19}$") && (role.equals("DOCTOR")) || (role.equals("ADMIN")) || (role.equals("USER"))) {
                return new Token(Long.parseLong(id), Role.valueOf(role));
            }
            return null;
        } catch (SignatureException e) {
            return null;
        }
    }
}
