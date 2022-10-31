/**
 * @author Roberto Trugilho Moreira
 */
public class ContaPoupanca extends Conta {

	public ContaPoupanca(Cliente cliente) {
		super(cliente);
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("**Extrato de Conta Poupan�a**");
		imprimirInformacoesComuns();
	}

}
