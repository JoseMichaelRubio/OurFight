package dev.rubio.util;

import dev.rubio.models.Doctor;
import dev.rubio.models.Specialization;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;

import java.util.Properties;

public class HibernateUtil {
    private static SessionFactory sessionFactory;
    private static SessionFactory getSessionFactory(){
        if(sessionFactory==null){
            Configuration configuration = new Configuration();
            Properties settings = new Properties();
            settings.put(Environment.URL, "jdbc:postgresql://localhost:5432/practice-db");
            settings.put(Environment.USER, "postgres");
            settings.put(Environment.PASS, "Mentalhealth1");

            //https://docs.microsoft.com/en-us/sql/connect/jdbc/working-with-a-connection?view=sql-server-ver15
            settings.put(Environment.DRIVER, "org.postgresql.Driver");
            //https://www.javatpoint.com/dialects-in-hibernate
            settings.put(Environment.DIALECT, "org.hibernate.dialect.PostgreSQLDialect");

            settings.put(Environment.HBM2DDL_AUTO, "create"); //create first, then validate
            settings.put(Environment.SHOW_SQL, "true");

            configuration.setProperties(settings);

            //provide hibernate mappings to configuration
            configuration.addAnnotatedClass(Doctor.class);
            configuration.addAnnotatedClass(Specialization.class);

            sessionFactory = configuration.buildSessionFactory();
        }
        return sessionFactory;
    }

    public static Session getSession() {
        return getSessionFactory().openSession();
    }
}
