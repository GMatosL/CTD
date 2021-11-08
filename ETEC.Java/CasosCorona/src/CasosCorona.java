
import java.util.Scanner;

public class CasosCorona {
    
    public static void main(String[] args) {
    int numero;
    int Totalcasos;
    float Resultado;
    String nome;
    Totalcasos = 20000000;
    
Scanner leitor = new Scanner(System.in);     
System.out.println("Percentual de Casos de Coronavírus nas Regiões do Brasil");
System.out.println("Digite o Nome da Região utilizando o Underline como Espaço");    
nome=leitor.next();
System.out.println("Digite o Número de casos da Região");
    numero = leitor.nextInt();
Resultado = (float)((numero*100/Totalcasos));
System.out.println("A porcentagem de " + nome + " é de " + Resultado + "%");


    }

}
