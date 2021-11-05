const app = Vue.createApp({
    data(){
        return {
            // Retornando variables
            title: "Hello world",
            name: "Jhon Fredy",
            age: 21,
            // Retornando objetos
            user: {
                name: "Lina",
                lastName: "Muñoz",
                age: 22,
                crush: "Fred",
                hobbies: ["basket", "programming", "working"]
            }
        };
    }
});