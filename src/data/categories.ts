import {Category} from '../types/Category';

export const categories: Category = {
    net: { title: 'Rede-Internet', color: 'blue', expense: true },
    cabletv: { title: 'TV a Cabo', color: 'brown', expense: true },
    salary: { title: 'Salário-Mensal', color: 'green', expense: false },
    school: {title:'Escola-Filhos', color:'purple', expense:true },
    shopping:{title:'Supermercado', color:'#363636', expense: true},
    bill:{title:'Conta de Luz', color:'#5c2f0a',  expense: true},
    billW:{title:'Conta de Água', color:'#ffab00', expense:true},
    shopp:{title:'Itens-Extras', color:'#0e2902', expense: true},
    schoolbus:{title:'Trans-Escolar', color:'#170024', expense:true},
    rent:{title:'Aluguel-Casa', color:'#29030e', expense: true}

}