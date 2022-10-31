/**
 * @author Roberto Trugilho Moreira
 */
public class ContaUniversitaria extends Conta {

	public ContaUniversitaria(Cliente cliente) {
		super(cliente);
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("**Extrato de Conta Universitaria**");
		imprimirInformacoesComuns();
	}
}
