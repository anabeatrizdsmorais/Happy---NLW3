const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    
    //inserir dados na tabela ((toda vez q dou comando para rodar, ele insere dados na minha tabela))
    await saveOrphanage(db,  {
        lat: "-19.4782699",
        lng: "-42.5390311",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "31994598253",
        images: [
            
            "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0" 

    })
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2" ')
    console.log(orphanage)

    //apagar um dado na tabela
    /*console.log(await db.run('DELETE FROM orphanages WHERE id ="4" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="5" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="6" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="7" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="8" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="9" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="10" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id ="11" '))
    */
    //consultar dados da tabela
   // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   // console.log(selectedOrphanages)

})