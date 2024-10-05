import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
   
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply)=>{
        
        let responseText = "```json\n{\n  \"nome\": \"Herculano\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 27,\n  \"altura\": 1.65,\n  \"peso\": 89,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural\",\n        \"1 scoop de whey protein\",\n        \"50g de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de batata doce\",\n        \"1 xícara de arroz integral\",\n        \"Salada de folhas verdes\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 maçã\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xícara de brócolis\",\n        \"1 xícara de quinoa\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 scoop de casein protein\",\n        \"1 fatia de pão integral\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try{

            // Extrair o json
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)

            return reply.send({data:jsonObject})

        }catch(err){
            console.log(err)
        }

        reply.send({ok: true})
    })

    fastify.post("/create", (request: FastifyRequest, reply: FastifyReply)=>{
        return new CreateNutritionController().handle(request, reply)
    })



}

