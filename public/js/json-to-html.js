console.log(data)

document.getElementById("tableur").innerHTML = `
    <h1>${data.length} Comptes</h1>
    <table class="table table-bordered">
        <tr>
            <th>Comptes</th>
            <th>Libelles</th>
            <th>Debit_Ouv</th>
            <th>Credit_Ouv</th>
            <th>Debit_Mov</th>
            <th>Credit_Mov</th>
            <th>Debit_Sold</th>
            <th>Credit_Sold</th>
        </tr>

    ${data.map(function (d) {
    return `
        <tr>
            <td>${d.Comptes ? d.Comptes : ''}</td>
            <td>${d.Libelles ? d.Libelles : ''}</td>
            <td>${d.Debit_Ouv ? d.Debit_Ouv : ''}</td>
            <td>${d.Credit_Ouv ? d.Credit_Ouv : ''}</td>
            <td>${d.Debit_Mov ? d.Debit_Mov : ''}</td>
            <td>${d.Credit_Mov ? d.Credit_Mov : ''}</td>
            <td>${d.Debit_Sold ? d.Debit_Sold : ''}</td>
            <td>${d.Credit_Sold ? d.Credit_Sold : ''}</td>
        </tr>
    `
}).join('')}
</table>
`;

