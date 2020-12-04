import { Injectable } from "@angular/core";

@Injectable()
export class EstruturaQuestao {
    questoes : string[];
    sim_ : string[];
    campo_ : string[];

    constructor (){
        this.encheVetor();
    }
    
    encheVetor(){
        this.questoes = new Array(105);
        this.sim_ = new Array(105);
        this.campo_ = new Array(105);
        this.questoes[1]='O(a) senhor(a) considera que a sua memória é tão boa quanto a de outras pessoas da sua idade?';
        this.questoes[2]='Vou lhe dizer 3 palavras e o(a) senhor(a) irá repeti-las em seguida. Peço que memorie essas 3 palavras, pois vou lhe perguntar sobre elas mais tarde novamente.<b>[Instruções: Falar as 3 palavras em sequência pausadamente. Caso o(a) idoso(a) não consiga, repita no máximo 3 vezes para aprendizado. Pontuar ao lado se o(a) idoso(a) repetiu corretamente as três palavras na primeira tentativa]</b>. CARRO – VASO - TIJOLO';
        this.questoes[3]='Agora, eu vou marcar um minuto no relógio e durante esse tempo o(a) senhor(a) deve falar o maior número de animais de que se lembrar. Quanto mais animais o(a) senhor(a) falar nesse tempo, melhor. <b>[Anote os nomes de animais falados pelo(a) idoso(a) a cada 15 segundos. Registrar, mas não contar animais repetidos]</b> Pode começar.';
        this.questoes[4]='O(a) senhor(a) consegue se lembrar das 3 palavras que lhe pedi que repetisse agora há pouco? <b>[Instruções: o entrevistador não deve dizer as palavras. Pontue se o(a) idoso(a) lembrou e repetiu corretamente as 3 palavras]</b>.';
        this.questoes[5]='<b>[Instruções: Esteja com uma folha em mãos e fale todos os comandos de uma vez só]</b> Senhor(a), vou lhe pedir para realizar uma tarefa agora com este papel. Pegue-o com a mão direita, dobre-o ao meio e coloque-o sobre a mesa.<br><b>[Instruções: Pontue se o(a) idoso(a) realizou os 3 comandos corretamente]</b>';

        this.questoes[6]='<b>Teste do desenho Relógio. [Instruções: Aplique apenas se o (a) idoso tiver escolaridade igual ou superior a 5 anos. Caso não, pontue ao lado de forma negativa. Esteja com uma folha com um desenho de um círculo de 11 cm de diâmetro e dê as instruções para a tarefa]</b>. Senhor(a), nesta folha temos um mostrador de um relógio. Gostaria que o senhor(a) colocasse os números dentro dele. <b>[Aguardar]</b>. Por favor, agora indique o horário 11h10 (onze horas e 10 minutos). <br><b>[Instruções: Análise o desenho e pontue ao lado se o(a) idoso(a) atingiu a nota de corte esperada. Nota de corte: Atribua um ponto para cada posicionamento correto dos números 1,2,4,5,7,8,10 e 11, mais um ponto para cada ponteiro correto (pontuação máxima = 10). Nota de corte = 7]</b>.';
        this.questoes[7]='[Instruções: Com base na resposta dada, analisar e registrar ao lado se o(a) idoso(a) sente-se mais velho do que realmente é:]';
        this.questoes[8]='De maneira geral, o(a) senhor(a) diria que a sua saúde é boa?';
        this.questoes[9]='O(a) senhor acha que a velhice, de forma geral, tem mais pontos negativos do que positivos?';
        this.questoes[10]='Ao pensar no seu envelhecimento, o(a) senhor(a) se sente preocupado(a)?';
        this.questoes[11]='O(a) senhor(a) acha que é possível ter uma vida sexual saudável na velhice?';
        this.questoes[12]='O(a) senhor(a) acha que há poucas coisas que uma pessoa possa realizar na velhice?';
        this.questoes[13]='O(a) senhor(a) acha que a velhice é sinônimo de debilidade física?';
        this.questoes[14]='O(a) senhor(a) acha que é melhor morrer cedo do que ficar velho(a)?';
        
        this.questoes[15]='De modo geral o(a) senhor(a) está satisfeito com a vida?';
        this.questoes[16]='O(a) senhor (a) se sente triste com frequência?';
        this.questoes[17]='O(a) senhor(a) abandonou muitas das coisas que fazia ou gostava de fazer?';
        this.questoes[18]='O(a) senhor(a) tem medo de que algo ruim lhe aconteça?';
        this.questoes[19]='O(a) Sr.(a) se sente impaciente e agitado(a) com frequência?';
        
        this.questoes[20]='O(a) senhor(a) tem dificuldades para enxergar? [Observação: Mesmo se já utilizar óculos ou outros métodos corretivos.]';
        this.questoes[21]='O(a) senhor(a) tem dificuldade para ouvir o que as pessoas falam? [Observação: Mesmo se já utilizar aparelho auditivo]';
        this.questoes[22]='O(a) senhor(a) tem dificuldade para sentir o sabor dos alimentos?';
        this.questoes[23]='Por causa dos seus sentidos (visão, audição, paladar), o senhor(a) tem dificuldade de realizar suas atividades cotidianas?';
        
        this.questoes[24]='Fazer compras fora de casa?';
        this.questoes[25]='Usar meios de transporte coletivo (ônibus, metrô e trem)?';
        this.questoes[26]='Cozinhar a própria comida?';
        this.questoes[27]='Usar o telefone?';
        this.questoes[28]='Vestir-se (exceto para colocar as meias e calçados)?';
        this.questoes[29]='Tomar banho?';
        
        this.questoes[30]='O(a) senhor(a) tem dificuldades para mastigar?';
        this.questoes[31]='O(a) senhor(a) faz menos do que três refeições por dia?';
        this.questoes[32]='Nos últimos 3 meses, o(a) senhor(a) percebeu que passou a comer menos sem motivo?';
        this.questoes[33]='Nos últimos 3 meses, o(a) senhor(a) perdeu peso sem motivo aparente?';
        this.questoes[34]='Nos últimos 3 meses, o(a) senhor(a) passou por algum estresse psicológico?';
        this.questoes[35]='IMC menor ou igual que 22 Kg/m2';
        
        this.questoes[36]='O(a) senhor(a) tem histórico familiar (pais, irmãos ou filhos) de DCV (infarto, derrame, angina)?';
        this.questoes[37]='O(a) senhor(a) tem pressão alta (superior a 140/90 mmHg)? <b> [Instruções: Pontuar como sim quando PA auto referida for superior ao valor indicado, mesmo com o uso de anti-hipertensivos, ou caso o(a) idoso(a) não saiba informar.]</b>';
        this.questoes[38]='O(a) senhor(a) tem glicemia de jejum superior a 100 mg/dL? <b> [Instruções: Pontuar como sim quando a resposta for positiva mesmo com o uso de antidiabéticos ou caso o(a) idoso(a) não saiba informar.]</b>';
        this.questoes[39]='O(a) senhor(a) tem colesterol alterado? <b>[Instruções: Pontuar como sim quando 1) verificar no exame valores de CT e HDL superior a 200 mg/dL e inferior 60 mg/dL, respectivamente, mesmo com uso de hipolipemiantes; 2) auto relato de colesterol alterado; ou 3) caso o(a) idoso(a) não saiba informar.]</b>';
        this.questoes[40]='O(a) senhor(a) fuma ou deixou de fumar nos últimos 6 meses?';
        this.questoes[41]='Assinale ao lado a resposta com base na tabela de referência do final da questão:'; 
        this.questoes[42]='Assinale ao lado a resposta equivalente, (sim ou não),  considerando prática regular de exercícios como: frequência igual ou superior a 2 dias/semana com tempo total igual ou superior a 150 minutos/semana].';
        this.questoes[43]='IMC para obesidade: ≥27 Kg/m2';
        
        this.questoes[46]='Quais os medicamentos utilizados pelo(a) senhor(a)? [Instruções: Solicitar as bulas dos medicamentos e fazer registro legível dos respectivos nomes e classes terapêuticas.]';

        this.questoes[47]='O(a) senhor(a) sabe para que serve todos os seus medicamentos?';
        this.questoes[48]='Nos últimos 6 meses, houve aumento progressivo na quantidade de medicamentos prescritos para o(a) senhor(a)?';
        this.questoes[49]='Os medicamentos que o(a) senhor(a) faz uso foram prescritos por médicos diferentes?';
        this.questoes[50]='O(a) senhor(a) toma os medicamentos de acordo com as orientações médicas?';
        this.questoes[51]='O (a) senhor(a) deixa de tomar seus medicamentos com frequência?';
        this.questoes[52]='O(a) senhor(a) tem o costume de tomar remédios por conta própria?';
        this.questoes[53]='Verificar na lista de medicamentos potencialmente inapropriados para idosos brasileiros (anexada ao PAGe) se o(a) idoso(a) toma algum dos medicamentos citados na mesma. [Instruções: Pontue ao lado e os deixe destacados na lista.]';
        this.questoes[54]='Cálculo do risco para reações adversas.';
        
        this.questoes[55]='O(a) senhor(a) tem: [Instruções: Fazer registro dos familiares vivos].cônjuge';
        this.questoes[56]='O(a) senhor(a) encontra pessoas que o(a) senhor(a) gosta com frequência?';
        this.questoes[57]='O(a) senhor(a) participa de decisões tomadas pela sua família?';
        this.questoes[58]='O(a) senhor(a) se sente satisfeito(a) com os seus relacionamentos afetivos?';
        this.questoes[59]='O (a) senhor(a) pode contar com alguém se precisar de dinheiro?';
        this.questoes[60]='O(a) senhor(a) pode contar com alguém para ajudá-lo(a) a resolver problemas?';
        this.questoes[61]='O(a) senhor(a) tem pessoas com quem possa se divertir e relaxar?';
        this.questoes[62]='O (a) senhor(a) participa de eventos socioculturais, tais como: peças de teatro, cinema, universidade aberta a terceira idade, centro de convivência, festas, ligados à religião, entre outros).';
        this.questoes[63]='O (a) senhor(a) é atendido regularmente por serviços de saúde?';
        
        this.questoes[64]='O(a) senhor (a) tem medo de alguém do seu convívio?';
        this.questoes[65]='O(a) senhor(a) se sente abandonado?';
        this.questoes[66]='Alguém tem falado com o(a) senhor(a) de forma que se sinta mal consigo mesmo(a)?';
        this.questoes[67]='Alguém tem agredido o(a) senhor(a) fisicamente?';
        this.questoes[68]='O(a) senhor(a) tem passado necessidade (de roupas, alimentação, medicamentos ou outras)?';
        this.questoes[69]='Alguém tem usado o dinheiro do(a) senhor(a) sem a sua autorização?';
        this.questoes[70]='Alguém do seu convívio já tocou o corpo do(a) senhor(a) sem o seu consentimento?';
        this.questoes[71]='O(a) senhor(a) está deixando de cuidar de si próprio?';
        
        this.questoes[72]=' Os móveis próximos às áreas de circulação são estáveis (firmes)?';
        this.questoes[73]='Há objetos (chinelos, brinquedos, tapetes, etc) soltos nas áreas de circulação?';
        this.questoes[74]='O piso é escorregadio (ex. encerado, molhado)?';
        this.questoes[75]='Há tapetes antiderrapantes (fora e dentro do box)?';
        this.questoes[76]='Há escadas? [Instruções: item sem pontuação. Se não houver escadas, pular as próximas duas questões e pontuá-las positivamente.]';
        this.questoes[77]='As escadas são iluminadas?';
        this.questoes[78]='As escadas possuem corrimãos em ambos os lados?';
        
        this.questoes[79]='[Comportamento de risco] - O(a) senhor(a) costuma: Subir em banquetas ou cadeiras para alcançar objetos altos?';
        this.questoes[80]='Acender as luzes ao levantar-se à noite?';
        this.questoes[81]='Utilizar calçados seguros e adequados (solado antiderrapante, bem ajustados e firmes no pé, sem saltos etc)?';
        
        this.questoes[82]='[Ambiente Externo] As calçadas próximas à sua residência são bem cuidadas (pavimentadas, lisas e sem buracos)?';
        this.questoes[83]='No seu bairro, o transporte público é acessível?';
        this.questoes[84]='No seu bairro, o comércio é acessível?';
        this.questoes[85]='No seu bairro, há facilidade e prazer em andar (a pé/com cadeira de rodas/bengala/andador)?';
        this.questoes[86]='No seu bairro, a diversão (restaurantes, cinema, clubes, etc) é acessível?';
        this.questoes[87]='O seu bairro é seguro?';
        
        this.questoes[88]='O(a) senhor(a) sofreu alguma queda nos últimos 12 meses?';
        this.questoes[89]='O(a) senhor(a) sofreu alguma fratura decorrente destas quedas? ';
        this.questoes[90]='O que o (a) senhor(a) estava fazendo quando sofreu essa(s) queda(s)? [Investigar atividade realizada, local, horário do dia, tipo de calçado, riscos ambientais etc.]';
        this.questoes[91]='Avaliação de força de MMII [Instruções: Utilizando uma cadeira sem braços, de assento e encosto firmes, peça ao(a) idoso(a) para levantar-se da cadeira sem ajuda. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa.]';
        this.questoes[92]='Avaliação de equilíbrio [Instruções: Peça ao(a) idoso(a) para permanecer em pé em uma única perna, sem apoio dos membros superiores, durante 5 segundos. Oriente retornar o pé no chão em caso de perda de equilíbrio. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa.]';
        this.questoes[93]='O(a) senhor(a) faz uso de dispositivo de auxílio à marcha (bengala, andador) sem orientação profissional?';
        
        this.questoes[94]='Idade > 75 anos [Ver em dados de identificação]';
        this.questoes[95]='Gênero feminino [Ver em dados de identificação]';
        this.questoes[96]='Alterações cognitivas [Pontuação negativa Teste do Relógio]';
        this.questoes[97]='Comprometimento AVDs [Pontuação < 4 em Capacidade Funcional]';
        this.questoes[98]='Déficit visual [Ver questão 20]';
        this.questoes[99]='Riscos domésticos [Ver questões 72 a 78]';
        this.questoes[100]='Riscos comportamentais [Ver questões 79 a 81]';
        this.questoes[101]='Inatividade [Ver questão 42]';
        this.questoes[102]='Acidente Vascular Encefálico prévio [Ver questão 44]';
        this.questoes[103]='Faz uso de medicações psicotrópicas, em especial benzodiazepínicos, OU uso contínuo de 5 ou mais medicações (polifarmácia) [Ver questão 46]';
        this.questoes[104]='Apresenta alguma das doenças a seguir: hipertensão, tontura/ vertigem, Parkinson, amputação de membros inferiores, convulsões, artrite, osteoporose, incontinência, diabetes, neuropatia, hipotensão postural [Ver questões 44 e 45]';    


        this.sim_[1]='1';
        this.sim_[2]='1';
        this.sim_[3]='1';
        this.sim_[4]='1';
        this.sim_[5]='1';
        this.sim_[6]='1';

        this.sim_[7]='0';
        this.sim_[8]='1';
        this.sim_[9]='0';
        this.sim_[10]='0';
        this.sim_[11]='1';
        this.sim_[12]='0';
        this.sim_[13]='0';
        this.sim_[14]='0';

        this.sim_[15]='1';
        this.sim_[16]='0';
        this.sim_[17]='0';
        this.sim_[18]='0';
        this.sim_[19]='0';

        this.sim_[20]='0';
        this.sim_[21]='0';
        this.sim_[22]='0';
        this.sim_[23]='0';

        this.sim_[24]='0';
        this.sim_[25]='0';
        this.sim_[26]='0';
        this.sim_[27]='0';
        this.sim_[28]='0';
        this.sim_[29]='0';

        this.sim_[30]='0';
        this.sim_[31]='0';
        this.sim_[32]='0';
        this.sim_[33]='0';
        this.sim_[34]='0';
        this.sim_[35]='0';


        this.sim_[36]='0';
        this.sim_[37]='0';
        this.sim_[38]='0';
        this.sim_[39]='0';
        this.sim_[40]='0';
        this.sim_[41]='0';
        this.sim_[42]='1';
        this.sim_[43]='0';


        this.sim_[46]='0';
        this.sim_[47]='1';
        this.sim_[48]='0';
        this.sim_[49]='0';
        this.sim_[50]='1';
        this.sim_[51]='0';
        this.sim_[52]='0';
        this.sim_[53]='0';
        this.sim_[54]='0';

        this.sim_[55]='1';
        this.sim_[56]='1';
        this.sim_[57]='1';
        this.sim_[58]='1';
        this.sim_[59]='1';
        this.sim_[60]='1';
        this.sim_[61]='1';
        this.sim_[62]='1';
        this.sim_[63]='1';

        this.sim_[64]='0';
        this.sim_[65]='0';
        this.sim_[66]='0';
        this.sim_[67]='0';
        this.sim_[68]='0';
        this.sim_[69]='0';
        this.sim_[70]='0';
        this.sim_[71]='0';

        this.sim_[72]='1';
        this.sim_[73]='0';
        this.sim_[74]='0';
        this.sim_[75]='1';
        this.sim_[76]='-1'; // Esta questão não conta..
        this.sim_[77]='1';
        this.sim_[78]='1';

        this.sim_[79]='0';
        this.sim_[80]='1';
        this.sim_[81]='1';

        this.sim_[82]='1';
        this.sim_[83]='1';
        this.sim_[84]='1';
        this.sim_[85]='1';
        this.sim_[86]='1';
        this.sim_[87]='1';

        this.sim_[88]='0';
        this.sim_[89]='0';
        
        this.sim_[90]='1';
        this.sim_[91]='1';
        this.sim_[92]='1';
        this.sim_[93]='0';

        this.sim_[94]='0';
        this.sim_[95]='0';
        this.sim_[96]='0';
        this.sim_[97]='0';
        this.sim_[98]='0';
        this.sim_[99]='0';
        this.sim_[100]='0';
        this.sim_[101]='0';
        this.sim_[102]='0';
        this.sim_[103]='0';
        this.sim_[104]='0';

        this.campo_[1]='q1_memory_good_like_others';
        this.campo_[2]='q2_three_words';
        this.campo_[3]='q3_animals';
        this.campo_[4]='q4_three_words';
        this.campo_[5]='q5_three_commands';
        this.campo_[6]='q6_clock';

        this.campo_[7]='q7_age_self_perception_analyze';
        this.campo_[8]='q8_good_health';
        this.campo_[9]='q9_more_neg_pos';
        this.campo_[10]='q10_worried';
        this.campo_[11]='q11_sex_life';
        this.campo_[12]='q12_little_to_do';
        this.campo_[13]='q13_physical_weakness';
        this.campo_[14]='q14_better_die';

        this.campo_[15]='q15_satisfied_with_life';
        this.campo_[16]='q16_frequently_sad';
        this.campo_[17]='q17_stopped_doing_things';
        this.campo_[18]='q18_fear_bad_things_happen';
        this.campo_[19]='q19_impatient_disquiet';

        this.campo_[20]='q20_vision_problems';
        this.campo_[21]='q21_hearing_problems';
        this.campo_[22]='q22_taste_problems';
        this.campo_[23]='q23_do_activities_problems';

        this.campo_[24]='q24_to_shop';
        this.campo_[25]='q25_use_transport';
        this.campo_[26]='q26_to_cook';
        this.campo_[27]='q27_useTelephone';
        this.campo_[28]='q28_dress_up';
        this.campo_[29]='q29_takeShower';

        this.campo_[30]='d30_difficulty_chewing';
        this.campo_[31]='d31_less3_meal_daily';
        this.campo_[32]='d32_decreases_amount_food';
        this.campo_[33]='d33_lost_weight_no_reason';
        this.campo_[34]='d34_stress_illness_hospitalization';
        this.campo_[35]='q35_bmi_less22';

        this.campo_[36]='q36_dcv_familiar_history';
        this.campo_[37]='q37_hypertension';
        this.campo_[38]='q38_uncontrolled_diabetes';
        this.campo_[39]='q39_cholesterol';
        this.campo_[40]='q40_smoker';
        this.campo_[41]='q41_alcohol_Ingested_last_week';
        this.campo_[42]='q42_practice_exercises';
        this.campo_[43]='q43_bmi_obesity';

        this.campo_[46]='q46_medicines_polypharmacy';
        this.campo_[47]='q47_know_medicines';
        this.campo_[48]='q48_medicines_increase';
        this.campo_[49]='q49_medicine_medical_precribed';
        this.campo_[50]='q50_medicine_medical_advice';
        this.campo_[51]='q51_already_stopped_medicines';
        this.campo_[52]='q52_self_medication';
        this.campo_[53]='q53_inappropriate_medication';
        this.campo_[54]='q54_risk_adverse_reaction';

        this.campo_[56]='q56_meet_family_friends';
        this.campo_[57]='q57_participate_family_decisions';
        this.campo_[58]='q58_satisfied_family_relationship';
        this.campo_[59]='q59_helped_if_need_money';
        this.campo_[60]='q60_someone_helps_if_need';
        this.campo_[61]='q61_someone_to_have_fun';
        this.campo_[62]='q62_participate_social_events';
        this.campo_[63]='q63_regulary_healt_services';
       
        this.campo_[64]='q64_afraid_close_person';
        this.campo_[65]='q65_feels_abandoned';
        this.campo_[66]='q66_forced';
        this.campo_[67]='q67_assauteld';
        this.campo_[68]='q68_in_need';
        this.campo_[69]='q69_someone_used_money';
        this.campo_[70]='q70_touched_without_permission';
        this.campo_[71]='q71_dont_take_care_health';

        this.campo_[72]='q72_estable_furniture';
        this.campo_[73]='q73_loose_objects_carpets';
        this.campo_[74]='q74_slippery_floor';
        this.campo_[75]='q75_non_slippery_carpet';
        this.campo_[76]='q76_stairs';
        this.campo_[77]='q77_lighted_stairs';
        this.campo_[78]='q78_handrail_on_stairs';

        this.campo_[79]='q79_get_on_stool';
        this.campo_[80]='q80_turn_lights_on';
        this.campo_[81]='q81_safe_shoes';

        this.campo_[82]='q82_manicure_sidewalks';
        this.campo_[83]='q83_public_transport_access';
        this.campo_[84]='q84_commerce_access';
        this.campo_[85]='q85_ease_plasewalking';
        this.campo_[86]='q86_fun_access';
        this.campo_[87]='q87_safety';

        this.campo_[88]='q88_falls_last_year';
        this.campo_[89]='q89_fractures_due_to_falls';
        this.campo_[90]= "0";
        this.campo_[91]='q91_strength_mmii';
        this.campo_[92]='q92_equilibrium';
        this.campo_[93]='q93_walking_aid_device';

        this.campo_[94]='q94_older_than75';
        this.campo_[95]='q95_female';
        this.campo_[96]='q96_cognitive_alterations';
        this.campo_[97]='q97_av_ds_commitment';
        this.campo_[98]='q98_visual_deficit';
        this.campo_[99]='q99_domestic_risks';
        this.campo_[100]='q100_behavior_risk';
        this.campo_[101]='q101_inactivity';
        this.campo_[102]='q102_prior_ave';
        this.campo_[103]='q103_psychotropic_medications_use';
        this.campo_[104]='q104_has_diseases';

    }

    public getQuestao(posicao : number): string{
        return this.questoes[posicao];
    }

    public getSim(posicao : number): string{
        return this.sim_[posicao];
    }

    public getCampo(posicao : number): string{
        return this.campo_[posicao];
    }
}