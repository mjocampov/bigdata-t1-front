package conect;

import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.SftpException;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
 
/**
 *
 * @author mmartinez
 */
public class Conection 
{ 
    private static final String USERNAME = "us_prog";
    private static final String HOST = "localhost";
    private static final int PORT = 22;
    private static final String PASSWORD = "programac";
 
    public static void main(String[] args) 
    { 
        try 
        {
            Conector sshConnector = new Conector();             
             
            sshConnector.connect(USERNAME, PASSWORD, HOST, PORT);
            sshConnector.addFile("/home/MyFiles", "C:/MyFiles/archivo.txt","archivo.txt");
            while (!sshConnector.getFile("/home/MyFiles", "C:/MyFiles/archivo.txt","archivo.txt"))
            {
            	TimeUnit.MINUTES.sleep(30);
            }
            sshConnector.disconnect();
        } 
        catch (JSchException ex) 
        {
            ex.printStackTrace();
             
            System.out.println(ex.getMessage());
        } 
        catch (IllegalAccessException ex) 
        {
            ex.printStackTrace();
             
            System.out.println(ex.getMessage());
        } 
        catch (IOException ex) 
        {
            ex.printStackTrace();
             
            System.out.println(ex.getMessage());
        } 
        catch (SftpException ex) 
        {
            ex.printStackTrace();
             
            System.out.println(ex.getMessage());
        } 
        catch (InterruptedException e) 
        {
			e.printStackTrace();
			
            System.out.println(e.getMessage());
		}
    }
    
}
