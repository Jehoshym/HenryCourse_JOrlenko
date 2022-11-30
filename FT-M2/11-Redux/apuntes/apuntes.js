/*  INTRO  
    Cuando estudiamos REACT vimos que ibamos creando componentes, estos componentes no son otra cosa que nodos. Por lo que se crea un pasa-manos entre componentes que ni siquiera necesitan informacion cruzada... para eso viene a ayudarnos REDUX

QUE ES REDUX?
    Juan tiene su propia empresa, el va y busca los productos, y luego va y los entrega a los clientes. 
    Pasado el tiempo, cuando el negocio crece, necesitará una empresa de logistica, que entregará a los clientes más distantes, y buscará a los proveedores más cercanos, mientras que Juan solo se encargará de los proveedores y clientes más cercanos.
    En este ejemplo, vemos que Juan sería React, mientras que la empresa de logística, sería REDUX.
    REDUX NO ES EXCLUSIVO DE REACT -> SON LIBRERIAS INDEPENDIENTES
    Es un almacen para administrar la información

ONE WAY DATA FLOW:
    LOS COMPS PADRES PASAN INFO A LOS HIJOS POR PROPS
    LOS COMPS HIJOS PASAN INFO A LOS PADRES POR EVENTOS
    Este manejo y pasamanos de informacion puede generar errores.
    Redux viene a manejar esta información de cambios de estados para que los componentes la puedan acceder directamente


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
COMO SE COMPONE REDUX?

<<ACTIONS>>
    Las actiones se generan 

<<STORE>>
    Almacen donde se guardan los estados

<<REDUCER>>
    Retornan un nuevo estado modificado por la action que se acaba de lanzar


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
LOS 3 PRINCIPIOS DE REDUX

1. LA STORE COMO UNICA FUENTE DE VERDAD
    la Store es unica, y almacena el estado de la aplicación
    store.dispatch() -> envia las acciones al store
    store.getState() -> permite el acceso al estado
    store.suscribe() -> permite recibir la info del estado



2. EL ESTADO ES DE SÓLO LECTURA
    los comps que solicitan datos del estado solo pueden leer los datos 
    las 'actions':
        >>tienen que ser descriptivas y especificas en lo que hacen (ej: complete_toDo)
        >>tiene que tener una propiedad 'type' que es la que la va a describir(por convencion las types se escriben en mayusculas sostenidas ('COMPLETE_TODO'))
        >>las actions son objetos
        >>'payload': es el segundo parametro del objeto, puede ser index, o el componente que haga falta

3. LOS CAMBIOS SE APLICAN CON FUNCIONES PURAS (REDUCERS)
    Para una misma funcion siempre va a tener un mismo resultado(ej: funcion suma(a,b){return a+b})
    se suele usar switch para evaluar cual type del action activa la funcion
    funcion: modificar el estado
    se pueden modularizar para que cada reducer pueda modificar un estado 
*/

const state = {};

function reducer (prevState, action) {
    switch(action.type) {
        case 'GET_CHARACTER_ID':
            //logica
        default:
            return prevState;
    }
}