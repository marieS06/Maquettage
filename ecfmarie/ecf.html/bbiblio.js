// Variable Global, je ne sais pas comment faire autrement
var sgagnant_name = []
var sgagnant_livre = []
var sgagnant_categorie = []
var sgagnant_resume = []
var sgagnant_annee = []
var slien_commercial = []
var simage_livre = []

// LECTURE DU FICHIER XML
// les versions d'Internet Explorer inférieures à la version 7 requièrent toujours une instanciation via un contrôle ActiveX. 
function getXMLHttpRequest() // fonction qui retournera l'objet XMLHttpRequest instancié
{
    var xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
    if (window.ActiveXObject) {
    try { /* try permet de définir un bloc à tester */
       xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) { /*bloc de code à exécuter si une erreur se produit*/
       xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    } else {
       xhr = new XMLHttpRequest();
    }
    } else {
      alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
      return null;
    }
    return xhr;
}
function request(callback)
{
    var xhr = getXMLHttpRequest(); /* declare une variable = recupere les données */
    xhr.onreadystatechange = function() { /* permet de definir une fonction, instruction de traitement de reponse*/
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {/*la fonction oneready statechange
    est appele contient le status xmlhttprequest 4 = requete 
    finit et reponse prete status= 200ok status= 0 demande non initialisé */
    callback(xhr.responseXML);/*fonction de rappel pour obtenir des données de reponse sous forme xml*/
        }
    };
    xhr.open("GET", "Bbiblio.xml", true);/*demande au serveur de manière asynchrome le fichier puisque c open c true*/
    xhr.send(null);/*envoie de requete null pour commande get*/
}

function readData(oData) //analyse les données XML et recrée les éléments 
    {


    
    var auteur = oData.getElementsByTagName("auteur"); 
    
    
 
     for(n=0;n<auteur.length;n++)
        {
            sgagnant_name.push(auteur[n].getAttribute("name") )
            sgagnant_livre.push(auteur[n].getAttribute("livre") )
            sgagnant_categorie.push(auteur[n].getAttribute("categorie")) 
            sgagnant_resume.push(auteur[n].getAttribute("resume")) 
            sgagnant_annee.push(auteur[n].getAttribute("annee") )
            slien_commercial.push(auteur[n].getAttribute("lcom")) 
            simage_livre.push(auteur[n].getAttribute("url") )
        }
    
   
    
    }

var gagnant_name = ["Lt. Korben Dallas","Lello Dallas","J.B.E. Zorg","Père Vito Cornelius"]
var gagnant_livre = ["Une retraite paisible","Ressuscité elle sauve le monde","L'art de la guerre moderne","Ce que je crois"]
var gagnant_categorie = ["Roman Français","Roman étranger","Documentaire","Biographie"]
var gagnant_resume = ["Après avoir travaillé toute...","Je ne me rappelle plus...","La guerre a toujours...","Depuis l'Egypte antique..."]
var gagnant_annee = ["2020","2020","2020","2020"]
var lien_commercial = ["https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322","https://www.amazon.fr/Cinquième-élément-DVD-Blu-ray/s?k=le+Cinquième+élément&rh=n%3A405322"]
var image_livre = ["https://vignette.wikia.nocookie.net/fifth-element/images/6/67/Korben_Dallas.png/revision/latest/scale-to-width-down/340?cb=20101107044415",
"https://medias.spotern.com/spots/w640/13/13912-1532336916.jpg",
"data:image/jpeg;base64,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",
"data:image/jpeg;base64,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"]

var jurynom = ["Rhod","Plavalaguna"]
var juryprenom = ["Ruby","diva"]
var jurycat = [["0","2"],["1","2","3"]] 

var jjury = 0 // jury actif
 

var creanom = ["Prane"]
var creaprenom = ["Doli"]
var creabio = ["MODIFER CE TEXTE ET REGARDER EN BAS DE PAGE Le paracétamol, aussi appelé acétaminophène, est un composé chimique utilisé comme antalgique et antipyrétique, qui figure parmi les médicaments les plus communs, utilisés et prescrits au monde."]
var ccrea = 0

var adminnom = ["Mondo"]
var adminprenom = ["Shawans"]
var aadmin = 0

$( document ).ready(function() {
    

    if (window.location.pathname == '/page_admin.html'){
        // chargement des infos de l'admin grace a ses information de connection
        document. getElementsByClassName("membreactuel")[0].innerHTML = adminprenom[aadmin]+" "+adminnom[aadmin]

        const article_admin_boutton_voir = document.getElementById("article_admin_boutton_voir")
        article_admin_boutton_voir.addEventListener("click", function(){
            const article_admin = document.getElementById("article_admin")

            // On affiche ce l'admin a ecrit dans un "p" pour illustrer
            const LesAdminsOntDit = document.getElementById("LesAdminsOntDit");
            LesAdminsOntDit.innerHTML = article_admin.value;

            // On envoie le contenu de l'article dans le innerHTML d'une page vierge
            // mais je ne sais pas comment faire, 

            window.open("article.html")
            // const nouvel_article = document.getElementById("nouvel_article");
            // nouvel_article.innerHTML = article_admin.value;
        });

        const article_admin_boutton_publier = document.getElementById("article_admin_boutton_publier")
        article_admin_boutton_publier.addEventListener("click", function(){
            const article_admin = document.getElementById("article_admin")

            // On affiche ce l'admin a ecrit dans un "p" pour illustrer
            const LesAdminsOntDit = document.getElementById("LesAdminsOntDit");
            LesAdminsOntDit.innerHTML = article_admin.value;

            // si l'admin est ok il publie sa page, mais il manque plein de chose
            // comme le nom de la page etc.... 

        });

        
    }
    if (window.location.pathname == '/comparaison.html'){ // renvoie le chemin et le nom de fichier de la page en cours
        // chargement des infos du jury grace a ses information de connection
        document. getElementsByClassName("membreactuel")[0].innerHTML = juryprenom[jjury]+" "+jurynom[jjury]
    }
    if (window.location.pathname == '/comparaison_oeuvre.html'){
        // chargement des infos du jury grace a ses information de connection
        document. getElementsByClassName("membreactuel")[0].innerHTML = juryprenom[jjury]+" "+jurynom[jjury]
    }
    if (window.location.pathname == '/historique_notes.html'){

        // charge le fichier XML 
        request(readData);

        // on lie l'historique du membre du jury et on cree automatiquement un tableau
        // de la meme maniere que je l'ai codé pour la page historique (mais je n'ai pas eu le courage de le refaire ici)
        // On prends dans les catergorie choisit par le jury une liste des oeuvres qui peuvent être pour lui


        // const c0 = document.getElementById("c0")
        // const c1 = document.getElementById("c1")
        // const c2 = document.getElementById("c2")
        // const c3 = document.getElementById("c3")
        document. getElementsByClassName("membreactuel")[0].innerHTML = juryprenom[jjury]+" "+jurynom[jjury]
        
        // recupere les preferences du jury
        var cat = jurycat[jjury]
        // on active les options lié aux choix du jury 
        for(n=0;n<cat.length;n++){
            document.getElementById("c"+cat[n]).disabled = false;
        }


        const pour_comparaison = document.getElementById("pour_comparaison")
        pour_comparaison.addEventListener("click", function(){
            // on recupere quelles categories sont actives pour la comparaison
            const c0 = document.getElementById("c0").checked
            const c1 = document.getElementById("c1").checked
            const c2 = document.getElementById("c2").checked
            const c3 = document.getElementById("c3").checked    

            // On ouvre la page en envoyant ces données mais je ne sais pas comment faire
            window.open("comparaison.html","_self")

        });

        const save = document.getElementById("save")
        save.addEventListener("click", function(){
            // Ici on recuperera toutes les notes et on les enverras dans la base de données
            // Les proposition partiront dans l'historique
            // puis il faudra rafraichir la page avec les nouvelles données
        });        


        // Bouton qui existe pour le moment
        boutton = [0,1,10,11]
        for(n=0;n<boutton.length;n++){
            var tmp = document.getElementById("comp_"+boutton[n])
            tmp.addEventListener("click", function(){
                // Ici Pour toutes les oeuvres ont crée un boutton qui dirigera vers la page de comparaison par oeuvre
                // Il faudra alors recuperer pour cette oeuvre toutes les autres notes
                window.open("comparaison_oeuvre.html","_self")
            });               
        }

        const voir_0 = document.getElementById("voir_0")
        const montrexml = document.getElementById("montrexml")
        voir_0.addEventListener("click", function(){
            // on recupere quelles categories sont actives pour la comparaison
 
            montrexml.innerHTML = sgagnant_name[0] + "<br>" +
            sgagnant_livre[0]+ "<br> " +
            sgagnant_categorie[0]+ "<br> " +
            sgagnant_resume[0]+ "<br> " +
            sgagnant_annee[0] + " <br>" +
            slien_commercial[0] + "<br> " +
            simage_livre[0]

        });        

        const voir_1 = document.getElementById("voir_1")
        voir_1.addEventListener("click", function(){
            // on recupere quelles categories sont actives pour la comparaison
 
            montrexml.innerHTML = sgagnant_name[2] + "<br>" +
            sgagnant_livre[2]+ "<br> " +
            sgagnant_categorie[2]+ "<br> " +
            sgagnant_resume[2]+ "<br> " +
            sgagnant_annee[2] + " <br>" +
            slien_commercial[2] + "<br> " +
            simage_livre[2]

        });                

    }
    if (window.location.pathname == '/Createur.html'){

        // grace aux information de connection on identifie le membre du jury
        // on recupere ses informations dans la base de données
        document. getElementsByClassName("membreactuel")[0].innerHTML = creaprenom[ccrea]+" "+creanom[ccrea]
        document.getElementById("creanom").value = creanom[ccrea]
        document.getElementById("creaprenom").value = creaprenom[ccrea]
        document.getElementById("creabio").value = creabio[ccrea]
        const update_bio = document.getElementById("update_bio")
        update_bio.addEventListener("click", function(){
            // On recupere la nouvelle bio et on l'envoie a la base de donnée, on avertit les admins
            Nouvelle_Bio = document.getElementById("creabio").value
            // SEND BIO pour le moment afficher la nouvelle bio
            document.getElementById("nvbio").innerHTML = Nouvelle_Bio            
        });

        const formulaire_invisible = document.getElementById("formulaire_invisible")
        const submitouvre = document.getElementById("submitouvre")
        submitouvre.addEventListener("click", function(){
            // A chaque click on rend visible ou invisible le formulaire pour envoyer une nouvelle oeuvre   
            if(submitouvre.checked) // on rend visible
            {
                formulaire_invisible.className="";
            }else // sinon on rend invisible
            {
                formulaire_invisible.className="invisible";
            }   
        });
 
        

        const send_file = document.getElementById("send_file")
        send_file.addEventListener("click", function(){
            const NvOeuvre_nom = document.getElementById("NvOeuvre_nom").value
            const NvOeuvre_resume = document.getElementById("NvOeuvre_resume").value
            const cfr = document.getElementById("cfr").checked
            const cre = document.getElementById("cre").checked
            const cdc = document.getElementById("cdc").checked
            const cbb = document.getElementById("cbb").checked
            const NvOeuvre_com = document.getElementById("NvOeuvre_com").value                                                
    
            var studpi = cfr+cre+cdc+cbb; // normalement true=1 et false =0            
            var ok=1;
            if(studpi==0) // aucun choix
            {alert("Au moins une categorie");ok=0;}

            if(studpi>1) // aucun choix
            {alert("Vous avez choisit plusieurs catégories. Après la soumission de votre oeuvre les administrateurs vous contacterons.");ok=0;}            

            // On envoie le fichier vers la base de donnée avec les autres information et on avertit les admins            
            $('#fileUpload').on('change',function ()
            {
                var filePath = $(this).val();
                if(filePath=="")
                {alert("Choisissez un fichier");ok=0;}
            });
            if(ok==1){
            document.getElementById("nvbio").innerHTML += "<br>"                         
            document.getElementById("nvbio").innerHTML += NvOeuvre_nom + "<br>" 
            document.getElementById("nvbio").innerHTML += NvOeuvre_resume + "<br>" 
            document.getElementById("nvbio").innerHTML += NvOeuvre_com + "<br>"
            filePath             
            document.getElementById("nvbio").innerHTML += "NOUVEAU FICHIER ENVOYE"                         
            }
        });            
        

    }    
    if (window.location.pathname == '/Jury.html'){

        // grace aux information de connection on identifie le membre du jury
        // on recupere ses informations dans la base de données
        document. getElementsByClassName("membreactuel")[0].innerHTML = juryprenom[jjury]+" "+jurynom[jjury]
        document.getElementById("jurynom").value = jurynom[jjury]
        document.getElementById("juryprenom").value = juryprenom[jjury]
        
        const choixjuryB = document.getElementById("choixjuryB")
        choixjuryB.addEventListener("click", function(){
            // On recupere le choix du jury et on redirige vers la bonne page avec les bonnes infos

            choix = document.getElementsByName("choixjury")
            // Il n'y a que deux choix on déduis le choix
            if(choix[0].checked)
            {
                page = "historique_notes.html#proposition"
            } else 
            {
                page = "historique_notes.html"
            }
            
            
            window.open(page,"_self")
            
        });
            

    }

    if (window.location.pathname == '/Connect.html'){
        const button_login = document.getElementById("button_login")
        button_login.addEventListener("click", function(){
            // Verifie les information de connections et en fonction de ce que dit la base de données 
            // envoie soit sur les pages pour juré avec les droits de juré
            // soit sur les pages auteurs/éditeur avec les droits auteur éditeur


            login_t = document.getElementById("login_t").value
            pass_t = document.getElementById("pass_t").value
            document.getElementById("infocon").innerHTML= "les informations sont:" +login_t+" "+pass_t

            
        });
    }

    if (window.location.pathname == '/gagnant_rf.html'){
        // Dans la base de donnée on prends les données lié au gagnant, ici dans un tableau
        const img = document.getElementById("img_rf")
        const nom = document.getElementById("nom_gagnant_rf")
        const res = document.getElementById("resume_rf")
        const com = document.getElementById("lien_commercial_rf")

        gagnant = 0
        nom.innerHTML = gagnant_name[gagnant]
        res.innerHTML = gagnant_resume[gagnant]
        img.setAttribute("src", image_livre[gagnant]);
        com.setAttribute("href", lien_commercial[gagnant]);

    }
    if (window.location.pathname == '/gagnant_re.html'){
        // Dans la base de donnée on prends les données lié au gagnant, ici dans un tableau
        const img = document.getElementById("img_re")
        const nom = document.getElementById("nom_gagnant_re")
        const res = document.getElementById("resume_re")
        const com = document.getElementById("lien_commercial_re")

        gagnant = 1
        nom.innerHTML = gagnant_name[gagnant]
        res.innerHTML = gagnant_resume[gagnant]
        img.setAttribute("src", image_livre[gagnant]);
        com.setAttribute("href", lien_commercial[gagnant]);

    }  
    if (window.location.pathname == '/gagnant_dc.html'){
        // Dans la base de donnée on prends les données lié au gagnant, ici dans un tableau
        const img = document.getElementById("img_dc")
        const nom = document.getElementById("nom_gagnant_dc")
        const res = document.getElementById("resume_dc")
        const com = document.getElementById("lien_commercial_dc")

        gagnant = 2
        nom.innerHTML = gagnant_name[gagnant]
        res.innerHTML = gagnant_resume[gagnant]
        img.setAttribute("src", image_livre[gagnant]);
        com.setAttribute("href", lien_commercial[gagnant]);

    }            
    if (window.location.pathname == '/gagnant_bb.html'){
        // Dans la base de donnée on prends les données lié au gagnant, ici dans un tableau
        const img = document.getElementById("img_bb")
        const nom = document.getElementById("nom_gagnant_bb")
        const res = document.getElementById("resume_bb")
        const com = document.getElementById("lien_commercial_bb")

        gagnant = 3
        nom.innerHTML = gagnant_name[gagnant]
        res.innerHTML = gagnant_resume[gagnant]
        img.setAttribute("src", image_livre[gagnant]);
        com.setAttribute("href", lien_commercial[gagnant]);

    }        
   if (window.location.pathname == '/index.html'){

    /*
    Il faudra trouver et extraire dans la base SQL Les 4 gagnants par categorie du dernier concours et afficher automatiquement les informations en dessous
    Les informations a extraire par gagnant sont le nom du gagnant le nom de l'oeuvre et le résumé. 
    Ici j'ai simulé les données de la base de données dans des tableau
    */

    const RF = document.getElementById("RFrancais")
    n = 0;
    var ol = document.createElement("h5");
    cn = document.createTextNode(gagnant_livre[n] );
    ol.appendChild(cn);

    cn = document.createTextNode(" de ");
    ol.appendChild(cn);    
    RF.appendChild(ol);
    
    var ol = document.createElement("h5");    
    cn = document.createTextNode(gagnant_name[n]);
    ol.appendChild(cn);
    RF.appendChild(ol);

    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_categorie[n]);
    ol.appendChild(cn);
    RF.appendChild(ol);     

    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_resume[n]);
    ol.appendChild(cn);
    RF.appendChild(ol); 

    const RE = document.getElementById("REtranger")
    n = 1;
    var ol = document.createElement("h5");
    cn = document.createTextNode(gagnant_livre[n] );
    ol.appendChild(cn);

    cn = document.createTextNode(" de ");
    ol.appendChild(cn);    
    RE.appendChild(ol);
    
    var ol = document.createElement("h5");    
    cn = document.createTextNode(gagnant_name[n]);
    ol.appendChild(cn);
    RE.appendChild(ol);
    
    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_categorie[n]);
    ol.appendChild(cn);
    RE.appendChild(ol); 

    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_resume[n]);
    ol.appendChild(cn);
    RE.appendChild(ol);     

    

    const Dc = document.getElementById("Documenta")
    n = 2;
    var ol = document.createElement("h5");
    cn = document.createTextNode(gagnant_livre[n] );
    ol.appendChild(cn);

    cn = document.createTextNode(" de ");
    
    ol.appendChild(cn);    
    Dc.appendChild(ol);
    
    var ol = document.createElement("h5");    
    cn = document.createTextNode(gagnant_name[n]);
    ol.appendChild(cn);
    Dc.appendChild(ol);

    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_categorie[n]);
    ol.appendChild(cn);
    Dc.appendChild(ol); 

    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_resume[n]);
    ol.appendChild(cn);
    Dc.appendChild(ol); 
    
    const Bb = document.getElementById("Bibliogra")
    n = 3;
    var ol = document.createElement("h5");
    cn = document.createTextNode(gagnant_livre[n] );
    ol.appendChild(cn);

    cn = document.createTextNode(" de ");
    ol.appendChild(cn);    
    Bb.appendChild(ol);
    
    var ol = document.createElement("h5");    
    cn = document.createTextNode(gagnant_name[n]);
    ol.appendChild(cn);
    Bb.appendChild(ol);
    
    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_categorie[n]);
    ol.appendChild(cn);
    Bb.appendChild(ol);    
    
    var ol = document.createElement("p");    
    cn = document.createTextNode(gagnant_resume[n]);
    ol.appendChild(cn);
    Bb.appendChild(ol);        
   }
    

   if (window.location.pathname == '/historique.html'){
    const tableau = document.getElementById("table_historique")

    /*
    Il faudra trouver et extraire dans la base SQL tous Les gagnantsafficher automatiquement les informations en dessous
    Les informations a extraire par gagnant sont le nom du gagnant le nom de l'oeuvre la categorie et la date. 
    Ici j'ai simulé les données de la base de données dans des tableau
    */
    for(gagnant=0;gagnant<4;gagnant++)
        {

           var ligne = document.createElement("TR");   
           var idligne = "ligne"+gagnant

           ligne.setAttribute("id",idligne)          
           tableau.appendChild(ligne);


           var colonne = document.createElement("TD");             
           var txt = document.createTextNode(gagnant_annee[gagnant]); 
           colonne.appendChild(txt)
           ligne.appendChild(colonne)

           var colonne = document.createElement("TD");             
           var txt = document.createTextNode(gagnant_name[gagnant]); 
           colonne.appendChild(txt)
           ligne.appendChild(colonne)
        
       
           var colonne = document.createElement("TD");             
           var txt = document.createTextNode(gagnant_livre[gagnant]); 
           colonne.appendChild(txt)
           ligne.appendChild(colonne)

           var colonne = document.createElement("TD");             
           var txt = document.createTextNode(gagnant_categorie[gagnant]); 
           colonne.appendChild(txt)
           ligne.appendChild(colonne)
        
        }


   }

});



function affiche_inscription(){
    const affichage = document.getElementById("affiche_inscription")

    var type = document.getElementById("type_inscription");
    var type_inscription = type.options[type.selectedIndex].value;
    if(type_inscription==""){
        alert("Veuillez choisir un type d'insciption valide")
    }else{

        var texte = "adresse e-mail: " + document.getElementById("email").value + "<br>"
        texte += "motivation: " + document.getElementById("motivation").value + "<br>"
        texte += "type: " + type_inscription

        affichage.innerHTML = texte
    }
    return false; // pour ne pas envoyer le formulaire
}

function verification_inscription_jury(){
    // Verifier que les mots de passes sont les meme
    const pass_jury1 = document.getElementById("pass_jury1").value
    const pass_jury2 = document.getElementById("pass_jury2").value

    

    if(pass_jury1!=pass_jury2){alert("Les mots de passe doivent être identique")}


    // recuperer les infos et tout envoyer dans la base de données
    const jprenom = document.getElementById("jprenom").value
    const jnom = document.getElementById("jnom").value
    const jury_rf = document.getElementById("jury_rf").checked
    const jury_re = document.getElementById("jury_re").checked
    const jury_dc = document.getElementById("jury_dc").checked
    const jury_bb = document.getElementById("jury_bb").checked
    
    categorie = ""
    if(jury_rf) categorie+= "Roman Français"    + "<br>"
    if(jury_re) categorie+= "Roman Etranger" + "<br>"
    if(jury_dc) categorie+= "Documentaire" + "<br>"
    if(jury_bb) categorie+= "Bibliographie" + "<br>"       
    if(categorie == "") alert("Choisissez au moins une catégorie")


    var text = "prénom: "+ jprenom + "<br>"
    text += "nom: "+ jnom + "<br>"
    text += "categorie: "+ categorie
    
    document.getElementById("affiche_jury_1").innerHTML = text

    return false; // pour ne pas envoyer le formulaire
    // on enverra toutes ces données dans la base de données et on enverra une notification aux administrateurs

}


function verification_inscription_createur(){
    // Verifier que les mots de passes sont les meme
    const pass_crea1 = document.getElementById("pass_crea1").value
    const pass_crea2 = document.getElementById("pass_crea2").value

    

    if(pass_crea1!=pass_crea2){alert("Les mots de passe doivent être identique")}


    // recuperer les infos et tout envoyer dans la base de données
    const cprenom = document.getElementById("cprenom").value
    const cnom = document.getElementById("cnom").value
    const cbio = document.getElementById("biographie").value
    


    var text = "prénom: "+ cprenom + "<br>"
    text += "nom: "+ cnom + "<br>"
    text += "biographie: "+ cbio
    
    document.getElementById("affiche_createur_1").innerHTML = text

    return false; // pour ne pas envoyer le formulaire
    // on enverra toutes ces données dans la base de données et on enverra une notification aux administrateurs

}
// PAGE ADMIN

function onradiobutonclick(){
    // gere les radios bouttons pour les actions
    const radmin = document.getElementsByName("adminradio")

    const articleadmin = document.getElementById("articleadmin")
    const demandeadmin = document.getElementById("demandeadmin")
    const conflitadmin = document.getElementById("conflitadmin")

    
    if(radmin[0].checked){
        articleadmin.className="";
        demandeadmin.className="invisible";
        conflitadmin.className="invisible";
    }
    if(radmin[1].checked){
        articleadmin.className="invisible";
        demandeadmin.className="";
        conflitadmin.className="invisible";
    }        
    if(radmin[2].checked){
        articleadmin.className="invisible";
        demandeadmin.className="invisible";
        conflitadmin.className="";
    }     
}     