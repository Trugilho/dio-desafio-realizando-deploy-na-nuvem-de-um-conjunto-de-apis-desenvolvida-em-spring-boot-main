/**
 * @author Roberto Trugilho Moreira
 */
public abstract class Conta implements IConta {

	private static final int AGENCIA_PADRAO = 0;

	private static int SEQUENCIAL = 1;

	protected int agencia;
	protected int numero;
	protected double saldo;
	private Cliente cliente;

	public Conta(Cliente cliente) {
		this.agencia = AGENCIA_PADRAO;
		this.numero = SEQUENCIAL++;
		this.cliente = cliente;
	}

	@Override
	public void sacar(double valor) {
		saldo -= valor;
	}

	@Override
	public void depositar(double valor) {
		saldo += valor;
	}

	@Override
	public void transferir(double valor, Conta contaDestino) {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	public void sacar() {

	}

	public void depositar() {

	}

	public void transferir() {

	}

	public int getAgencia() {
		return agencia;
	}

	public int getNumero() {
		return numero;
	}

	public double getSaldo() {
		return saldo;
	}

	protected void imprimirInformacoesComuns() {
		System.out.println("Titular: " + cliente.getNome());
		System.out.println("Agencia: " + agencia);
		System.out.println("Numero da conta: " + numero);
		System.out.println("Saldo: " + saldo);
	}
}
