/*Iteración #2: Condicionales avanzados
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade
la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con
un console.log.*/

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}

        function isAproved(params) {
            for (let i = 0; i < params.length; i++) {
                student = params[i];
        
                let approvedSignature = 0;
        
                if (student.T1) {
                    approvedSignature++
                }
                if (student.T2) {
                    approvedSignature++
                }
                if (student.T3) {
                    approvedSignature++
                }
                student.isAproved = approvedSignature >= 2 ? true : false;
                approvedSignature = 0;
            }
        }
        isAproved(alumns);
        console.log(alumns);