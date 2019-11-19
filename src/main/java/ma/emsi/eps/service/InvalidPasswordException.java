package ma.emsi.eps.service;

public class InvalidPasswordException extends RuntimeException {

    public InvalidPasswordException() {
        super("Incorrect password");
    }

}
