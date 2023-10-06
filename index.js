document.addEventListener('DOMContentLoaded', () => {
    const produtos = [];

    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const productListModal = document.getElementById('productListModal');
    const bootstrapModal = new bootstrap.Modal(productListModal);

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeProduto = document.getElementById('nomeProduto').value;
        const descricaoProduto = document.getElementById('descricaoProduto').value;
        const valorProduto = parseFloat(document.getElementById('valorProduto').value);
        const disponivelParaVenda = document.querySelector('input[name="disponivelParaVenda"]:checked').value;

        const produto = { nome: nomeProduto, descricao: descricaoProduto, valor: valorProduto, disponivel: disponivelParaVenda };
        produtos.push(produto);

        productForm.reset();
        bootstrapModal.show();
        atualizarLista();
    });

    function atualizarLista() {
        productList.innerHTML = produtos.map((produto) => `
            <li class="list-group-item">
                <strong>${produto.nome}</strong><br>
                Descrição: ${produto.descricao}<br>
                Valor: R$ ${produto.valor.toFixed(2)}<br>
                Disponível para Venda: ${produto.disponivel}
            </li>
        `).join('');
    }
});


