/**
 * @author Roberto Trugilho Moreira
 */
public class Main {

	public static void main(String[] args) {
		Cliente Roberto = new Cliente();
		Roberto.setNome("Roberto");

		Conta cc = new ContaCorrente(Roberto);

		Conta cp = new ContaPoupanca(Roberto);

		Conta cu = new ContaUniversitaria(Roberto);

		cc.depositar(500);
		cc.imprimirExtrato();

		cp.depositar(500);
		cp.transferir(180, cu);
		cp.imprimirExtrato();

		cu.depositar(180);
		cu.sacar(80);
		cu.imprimirExtrato();
	}

}
