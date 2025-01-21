const opções_relatorio = document.getElementById('opções_relatorio')
const form_relatorio = document.getElementById('form_relatorio')
const button_gerar = document.getElementById('button_gerar')

form_relatorio.addEventListener('submit',(e)=>{
  e.preventDefault()
})  
    opções_relatorio.addEventListener('change',()=>{
    const opção_escolhida = opções_relatorio.value

    const divExistente = document.getElementById('div_vendas')
    if (divExistente) {
      divExistente.remove()
    }

    if (opção_escolhida === 'media') {
      //Primeiro
      let label_nota = document.createElement('label')
      label_nota.setAttribute('for','label_nota')
      label_nota.textContent = 'Digite a 1 nota do aluno'
      label_nota.style.marginTop = '20px'
      let input_nota = document.createElement('input')
      input_nota.type = 'number'
      input_nota.id = 'label_nota'
      input_nota.placeholder = 'Digite no minimo 3 notas'
      input_nota.max = 10
      input_nota.setAttribute('required',true)
      
      
      //Segundo
      let label_nota_2 = document.createElement('label')
      label_nota_2.setAttribute('for','label_nota_2')
      label_nota_2.textContent = 'Digite a 2 nota do aluno'
      let input_nota_2 = document.createElement('input')
      input_nota_2.type = 'number'
      input_nota_2.id = 'label_nota'
      input_nota_2.placeholder = 'Digite no minimo 3 notas'
      input_nota_2.max = 10
      input_nota_2.setAttribute('required',true)

       //Terceiro
       let label_nota_3 = document.createElement('label')
       label_nota_3.setAttribute('for','label_nota_3')
       label_nota_3.textContent = 'Digite a 3 nota do aluno'
       let input_nota_3 = document.createElement('input')
       input_nota_3.type = 'number'
       input_nota_3.id = 'label_nota'
       input_nota_3.placeholder = 'Digite no minimo 3 notas'
       input_nota_3.max = 10
       input_nota_3.setAttribute('required',true)
       


        //Quarto
      let label_nota_4 = document.createElement('label')
      label_nota_4.setAttribute('for','label_nota_4')
      label_nota_4.textContent = 'Digite a 4 nota do aluno'
      let input_nota_4 = document.createElement('input')
      input_nota_4.type = 'number'
      input_nota_4.id = 'label_nota'
      input_nota_4.placeholder = 'Digite no minimo 3 notas'
      input_nota_4.max = 10
      input_nota_4.setAttribute('required',true)


       //Quinto
       let label_nota_5 = document.createElement('label')
       label_nota_5.setAttribute('for','label_nota_5')
       label_nota_5.textContent = 'Digite a 5 nota do aluno'
       let input_nota_5 = document.createElement('input')
       input_nota_5.type = 'number'
       input_nota_5.id = 'label_nota'
       input_nota_5.placeholder = 'Digite no minimo 3 notas'
       input_nota_5.max = 10
       input_nota_5.setAttribute('required',true)

       /*const button_gerar = document.createElement('button')
       button_gerar.setAttribute('id','button_gerar')
       button_gerar.textContent = 'Gerar Planilha'*/
       let body = document.body
       //body.appendChild(button_gerar)
       //form_relatorio.appendChild(button_gerar)

       const div_notas = document.createElement('div')
       div_notas.setAttribute('id','div_notas')
       div_notas.appendChild(label_nota)
       div_notas.appendChild(input_nota)
       div_notas.appendChild(label_nota_2)
       div_notas.appendChild(input_nota_2)
       div_notas.appendChild(label_nota_3)
       div_notas.appendChild(input_nota_3)
       div_notas.appendChild(label_nota_4)
       div_notas.appendChild(input_nota_4)
       div_notas.appendChild(label_nota_5)
       div_notas.appendChild(input_nota_5)
       //div_notas.appendChild(button_gerar)
       body.appendChild(div_notas)
       form_relatorio.appendChild(div_notas)
       console.log(input_nota)


        button_gerar.addEventListener('click',(e)=>{        
          e.preventDefault()
          const obj_nota = {
          nota_1: Number(input_nota.value),
          nota_2: Number(input_nota_2.value),
          nota_3: Number(input_nota_3.value),
          nota_4: Number(input_nota_4.value),
          nota_5: Number(input_nota_5.value)
        }
         function verficar_media(obj_nota){
          const value_notas = Object.values(obj_nota)
          const soma = value_notas.reduce((total_nota,int)=>{
            return total_nota+int
          },0)
          const media = soma/5

          setTimeout(()=>{
            alert(`
              Sua média foi ${media}
            `)
          },1000)
          }
         verficar_media(obj_nota)
      })
    } else if (opção_escolhida === 'porcentagem') {
      
      const divExistente_nota = document.getElementById('div_notas')
      if (divExistente_nota) {
      divExistente_nota.remove()
    }

      let meta_vendas = document.createElement('input')
      meta_vendas.type ='number'
      meta_vendas.placeholder = 'Digite Aqui sua meta de vendas!'
      meta_vendas.setAttribute('required',true)
      //Primeiro
      let label_vendas = document.createElement('label')
      label_vendas.setAttribute('for','label_vendas')
      label_vendas.textContent = 'Digite o valor de vendas feitas'
      label_vendas.style.marginTop = '20px'
      let input_vendas = document.createElement('input')
      input_vendas.type = 'number'
      input_vendas.id = 'label_vendas'
      input_vendas.placeholder = 'Preencha Aqui as vendas'
      input_vendas.min = 1
      input_vendas.max = 100
      input_vendas.setAttribute('required',true)


      //Segundo
      let label_vendas_2 = document.createElement('label')
      label_vendas_2.setAttribute('for','label_vendas_2')
      label_vendas_2.textContent = 'Digite o valor de vendas feitas'
      label_vendas_2.style.marginTop = '20px'
      let input_vendas_2 = document.createElement('input')
      input_vendas_2.type = 'number'
      input_vendas_2.id = 'input_vendas_2'
      input_vendas_2.placeholder = 'Preencha Aqui as vendas'
      input_vendas_2.min = 1
      input_vendas_2.max = 100
      input_vendas_2.setAttribute('required',true)

    
       //Terceiro
       let label_vendas_3 = document.createElement('label')
       label_vendas_3.setAttribute('for','label_vendas_3')
       label_vendas_3.textContent = 'Digite o valor de vendas feitas'
       label_vendas_3.style.marginTop = '20px'
       let input_vendas_3 = document.createElement('input')
       input_vendas_3.type = 'number'
       input_vendas_3.id = 'input_vendas_3'
       input_vendas_3.placeholder = 'Preencha Aqui as vendas'
       input_vendas_3.min = 1
       input_vendas_3.max = 100
       input_vendas_3.setAttribute('required',true)
      
      const div_vendas = document.createElement('div')
      div_vendas.setAttribute('id','div_vendas')
      div_vendas.appendChild(meta_vendas)
      div_vendas.appendChild(label_vendas)
      div_vendas.appendChild(input_vendas)
      div_vendas.appendChild(label_vendas_2)
      div_vendas.appendChild(input_vendas_2)
      div_vendas.appendChild(label_vendas_3)
      div_vendas.appendChild(input_vendas_3)
      let body = document.body
      body.appendChild(div_vendas)
      form_relatorio.appendChild(div_vendas)

    
      button_gerar.addEventListener('click',(e)=>{
        e.preventDefault()

        let meta_value = meta_vendas.value
        if(meta_value>5000){
          alert('a meta de vendas deve ser menor que 1000')
          return
        }

        if(input_vendas ==='' || input_vendas_2===''|| input_vendas_3 ===''){
          alert('Preencha todos o inputs!')
          return
        }
        

        const obj_value_input = {
          vendas_1: parseInt(input_vendas.value),
          vendas_2:parseInt(input_vendas_2.value),
          vendas_3:parseInt(input_vendas_3.value)
        }

        function verificar_porcentagem(obj_value){
          const input_value = Object.values(obj_value)
          const soma_input = input_value.reduce((total_vendas,interador_vendas)=>{
            return total_vendas+interador_vendas
          },0)

          const porcentagem_total = ((soma_input / meta_value) * 100).toFixed(1)
          //console.log(porcentagem_total)
          //console.log(soma_input)
          
        }
        verificar_porcentagem(obj_value_input)
      })
    }

})


