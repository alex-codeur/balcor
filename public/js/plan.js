const comptes = [
    {
      id: 10110000,
      libelle: "Capital souscrit, non appelé"
    },
    {
      id: 10120000,
      libelle: "Capital souscrit, appelé, non versé"
    },
    {
      id: 10130000,
      libelle: "Capital Souscrit,appelé,versé,N.A."
    },
    {
      id: 10140000,
      libelle: "Capital souscrit, appelé, versé, am"
    },
    {
      id: 10180000,
      libelle: "Capital souscrit soumis à des condi"
    },
    {
      id: 101,
   libelle: "CAPITAL SOCIAL"
    },
    {
      id: 10210000,
      libelle: "Dotation initiale"
    },
    {
      id: 10220000,
      libelle: "Dotations complémentaires"
    },
    {
      id: 10280000,
      libelle: "Autres dotations"
    },
    {
      id: 10300000,
      libelle: "CAPITAL PERSONNEL"
    },
    {
      id: 10410000,
      libelle: "Apports temporaires"
    },
    {
      id: 10420000,
      libelle: "Opérations courantes"
    },
    {
      id: 10430000,
      libelle: "Rémunérations, impôts et autres cha"
    },
    {
      id: 10470000,
      libelle: "Prélèvements d’autoconsommation"
    },
    {
      id: 10480000,
      libelle: "Autres prélèvements"
    },
    {
      id: 10510000,
      libelle: "Primes d'émission"
    },
    {
      id: 10520000,
      libelle: "Primes d'apport"
    },
    {
      id: 10530000,
      libelle: "Primes de fusion"
    },
    {
      id: 10540000,
      libelle: "Primes de conversion"
    },
    {
      id: 10580000,
      libelle: "Autres primes"
    },
    {
      id: 10610000,
      libelle: "Écarts de réévaluation légale"
    },
    {
      id: 10620000,
      libelle: "Écarts de réévaluation libre"
    },
    {
      id: 10900000,
      libelle: "APPORTEURS, CAPITAL SOUSCRIT,NON AP"
    },
    {
      id: 10,
  libelle: "CAPITAL"
    },
    {
      id: 11100000,
      libelle: "RESERVE LEGALE"
    },
    {
      id: 11200000,
      libelle: "RÉSERVES STATUTAIRES OU CONTRACTUEL"
    },
    {
      id: 11310000,
      libelle: "Réserves de plus-values nettes à lo"
    },
    {
      id: 11330000,
      libelle: "Réserves consécutives à l'octroi de"
    },
    {
      id: 11380000,
      libelle: "Autres réserves réglementées"
    },
    {
      id: 11810000,
      libelle: "Réserves facultatives"
    },
    {
      id: 11880000,
      libelle: "Réserves diverses"
    },
    {
      id: 12100000,
      libelle: "Report à nouveau créditeur"
    },
    {
      id: 12900000,
      libelle: "Report à nouveau débiteur"
    },
    {
      id: 12910000,
      libelle: "Perte nette à reporter"
    },
    {
      id: 12920000,
      libelle: "Perte - Amortissements réputés diff"
    },
    {
      id: 12,
  libelle: "REPORT A NOUVEAUX"
    },
    {
      id: 13010000,
      libelle: "Résultat en Inst. d'Aff. : Bénéfic"
    },
    {
      id: 13020000,
      libelle: "Résultat en Inst. d'Aff. : Perte"
    },
    {
      id: 13090000,
      libelle: "Résultat en inst. d'Aff. : Perte"
    },
    {
      id: 13100000,
      libelle: "RÉSULTAT NET : BÉNÉFICE"
    },
    {
      id: 13200000,
      libelle: "MARGE COMMERCIALE (MC)"
    },
    {
      id: 13300000,
      libelle: "VALEUR AJOUTÉE (V.A.)"
    },
    {
      id: 13400000,
      libelle: "EXCÉDENT BRUT D'EXPLOITATION (E.B.E"
    },
    {
      id: 13500000,
      libelle: "RÉSULTAT D'EXPLOITATION (R.E.)"
    },
    {
      id: 13600000,
      libelle: "RÉSULTAT FINANCIER (R.F.)"
    },
    {
      id: 13700000,
      libelle: "RÉSULTAT DES ACTIVITÉS ORDINAIRES ("
    },
    {
      id: 13810000,
      libelle: "RESULTAT DE FUSION"
    },
    {
      id: 13820000,
      libelle: "RESULTAT D'APPORT PARTIEL D'ACTIF"
    },
    {
      id: 13830000,
      libelle: "RESULTAT DE SCISSION"
    },
    {
      id: 13840000,
      libelle: "RESULTAT DE LIQUIDATION"
    },
    {
      id: 13900000,
      libelle: "RÉSULTAT NET : PERTE"
    },
    {
      id: 13,
  libelle: "RESULTAT NET DE L'EXERCICE"
    },
    {
      id: 14110000,
      libelle: "État"
    },
    {
      id: 14120000,
      libelle: "Régions"
    },
    {
      id: 14130000,
      libelle: "Départements"
    },
    {
      id: 14140000,
      libelle: "Communes et collectivités publiques"
    },
    {
      id: 14150000,
      libelle: "Entités publiques ou mixtes"
    },
    {
      id: 14160000,
      libelle: "Entités et organismes privés"
    },
    {
      id: 14170000,
      libelle: "Organismes internationaux"
    },
    {
      id: 14180000,
      libelle: "Autres"
    },
    {
      id: 15100000,
      libelle: "AMORTISSEMENTS DÉROGATOIRES"
    },
    {
      id: 15200000,
      libelle: "PLUS-VALUES DE CESSION À RÉINVESTIR"
    },
    {
      id: 15310000,
      libelle: "Fonds National"
    },
    {
      id: 15320000,
      libelle: "Prélèvement pour le Budget"
    },
    {
      id: 15400000,
      libelle: "PROVISION SPÉCIALE DE RÉÉVALUATION"
    },
    {
      id: 15510000,
      libelle: "Reconstitution des gisements minier"
    },
    {
      id: 15610000,
      libelle: "Hausse de prix"
    },
    {
      id: 15620000,
      libelle: "Fluctuation des cours"
    },
    {
      id: 15700000,
      libelle: "PROVISIONS POUR INVESTISSEMENT"
    },
    {
      id: 15800000,
      libelle: "AUTRES PROVISIONS ET FONDS RÉGLEMEN"
    },
    {
      id: 16110000,
      libelle: "Emprunts obligataires ordinaires"
    },
    {
      id: 16120000,
      libelle: "Emprunts obligataires convertibles"
    },
    {
      id: 16130000,
      libelle: "Emprunts obligataires remboursables"
    },
    {
      id: 16180000,
      libelle: "Autres emprunts obligataires"
    },
    {
      id: 16200000,
      libelle: "Emprunts et dettes auprès ets. cre"
    },
    {
      id: 16210000,
      libelle: "Emprunts CBC"
    },
    {
      id: 16220000,
      libelle: "EMPRUNTS SGC"
    },
    {
      id: 162,
   libelle: "EMPRUNTS ET DETTES AUPRES ETS CRED"
    },
    {
      id: 16300000,
      libelle: "AVANCES REÇUES DE L'ÉTAT"
    },
    {
      id: 16400000,
      libelle: "AVANCES REÇUES ET COMPTES COURANTS"
    },
    {
      id: 16410000,
      libelle: "COMPTES COURANTS BLOQUES"
    },
    {
      id: 16510000,
      libelle: "Dépôts"
    },
    {
      id: 16520000,
      libelle: "Cautionnements"
    },
    {
      id: 16610000,
      libelle: "sur emprunts obligataires"
    },
    {
      id: 16620000,
      libelle: "Intérêts/emprunts ETS Crédit"
    },
    {
      id: 16630000,
      libelle: "sur avances reçues de l'État"
    },
    {
      id: 16640000,
      libelle: "Intérêts bloqués/Compte courant"
    },
    {
      id: 16650000,
      libelle: "sur dépôts et cautionnements reçus"
    },
    {
      id: 16670000,
      libelle: "sur avances assorties de conditions"
    },
    {
      id: 16680000,
      libelle: "sur autres emprunts et dettes"
    },
    {
      id: 166,
   libelle: "INTERETS COURUS"
    },
    {
      id: 16710000,
      libelle: "Avances bloquées pour augmentation"
    },
    {
      id: 16720000,
      libelle: "Avances conditionnées par l'État"
    },
    {
      id: 16730000,
      libelle: "Avances conditionnées par les autre"
    },
    {
      id: 16740000,
      libelle: "Avances conditionnées par les organ"
    },
    {
      id: 16810000,
      libelle: "Rentes viagères capitalisées"
    },
    {
      id: 16820000,
      libelle: "Billets de fonds"
    },
    {
      id: 16830000,
      libelle: "Dettes consécutives à des titres em"
    },
    {
      id: 16840000,
      libelle: "Emprunts participatifs"
    },
    {
      id: 16850000,
      libelle: "Participation des travailleurs aux"
    },
    {
      id: 16860000,
      libelle: "Emprunts et dettes contractés auprè"
    },
    {
      id: 16,
  libelle: "EMPRUNTS ET DETTES ASSIMILEES"
    },
    {
      id: 17200000,
      libelle: "Crédit bail mobilier"
    },
    {
      id: 17300000,
      libelle: "CREDIT BAIL MOBILIER"
    },
    {
      id: 17400000,
      libelle: "DETTES DE LOCATION ACQUISITION/ LOC"
    },
    {
      id: 17600000,
      libelle: "INTERETS COURUS DE CREDIT BAIL"
    },
    {
      id: 17620000,
      libelle: "sur dettes de location acquisition"
    },
    {
      id: 17630000,
      libelle: "sur dettes de location acquisition"
    },
    {
      id: 17680000,
      libelle: "sur autres dettes de location acqui"
    },
    {
      id: 17800000,
      libelle: "AUTRES DETTES DE LOCATION ACQUISITI"
    },
    {
      id: 18110000,
      libelle: "Dettes liées à des participations ("
    },
    {
      id: 18120000,
      libelle: "Dettes liées à des participations ("
    },
    {
      id: 18200000,
      libelle: "DETTES LIÉES À DES SOCIÉTÉS EN PART"
    },
    {
      id: 18300000,
      libelle: "INTÉRÊTS COURUS SUR DETTES LIÉES À"
    },
    {
      id: 18400000,
      libelle: "COMPTES PERMANENTS BLOQUÉS DES ÉTAB"
    },
    {
      id: 18500000,
      libelle: "COMPTES PERMANENTS NON BLOQUÉS DES"
    },
    {
      id: 18600000,
      libelle: "COMPTES DE LIAISON CHARGES"
    },
    {
      id: 18700000,
      libelle: "COMPTES DE LIAISON PRODUITS"
    },
    {
      id: 18800000,
      libelle: "COMPTES DE LIAISON DES SOCIÉTÉS EN"
    },
    {
      id: 19100000,
      libelle: "PROVISIONS POUR LITIGES"
    },
    {
      id: 19200000,
      libelle: "PROVISIONS POUR GARANTIES DONNÉES A"
    },
    {
      id: 19300000,
      libelle: "PROVISIONS POUR PERTES SUR MARCHÉS"
    },
    {
      id: 19400000,
      libelle: "PROVISIONS POUR PERTES DE CHANGE"
    },
    {
      id: 19500000,
      libelle: "PROVISIONS POUR IMPÔTS"
    },
    {
      id: 19610000,
      libelle: "Provisions pour pensions et obligat"
    },
    {
      id: 19620000,
      libelle: "Actif du regime de retraite"
    },
    {
      id: 19700000,
      libelle: "PROVISIONS POUR RESTRUCTURATION"
    },
    {
      id: 19810000,
      libelle: "Provisions pour amendes et pénalité"
    },
    {
      id: 19880000,
      libelle: "Provisions pour divers risques et c"
    },
    {
      id: 1,
     libelle: "COMPTES DE RESSOURCES DURABLES"
    },
    {
      id: 21100000,
      libelle: "FRAIS DE DÉVELOPPEMENT"
    },
    {
      id: 21200000,
      libelle: "BREVETS ET LICENCES"
    },
    {
      id: 21210000,
      libelle: "Brevets"
    },
    {
      id: 21220000,
      libelle: "Licences"
    },
    {
      id: 21230000,
      libelle: "Concessions de service public"
    },
    {
      id: 21280000,
      libelle: "autres concessions et droits simila"
    },
    {
      id: 21300000,
      libelle: "Logiciels"
    },
    {
      id: 21310000,
      libelle: "LOGICIELS"
    },
    {
      id: 21320000,
      libelle: "Sites internets"
    },
    {
      id: 213,
   libelle: "LOGICIELS"
    },
    {
      id: 21400000,
      libelle: "Marques"
    },
    {
      id: 214,
   libelle: "MARQUES"
    },
    {
      id: 21500000,
      libelle: "FONDS COMMERCIAL"
    },
    {
      id: 21600000,
      libelle: "DROIT AU BAIL"
    },
    {
      id: 21700000,
      libelle: "INVESTISSEMENTS DE CRÉATION"
    },
    {
      id: 21910000,
      libelle: "Frais de développement"
    },
    {
      id: 21930000,
      libelle: "Logicielset internet"
    },
    {
      id: 21980000,
      libelle: "Autres droits et valeurs incorporel"
    },
    {
      id: 21,
  libelle: "IMMOBILISATIONS INCORPORELLES"
    },
    {
      id: 22110000,
      libelle: "Terrains d'exploitation agricole"
    },
    {
      id: 22120000,
      libelle: "Terrains d'exploitation forestière"
    },
    {
      id: 22180000,
      libelle: "Autres terrains"
    },
    {
      id: 22210000,
      libelle: "Terrains à bâtir"
    },
    {
      id: 22280000,
      libelle: "Autres terrains nus"
    },
    {
      id: 22310000,
      libelle: "pour bâtiments industriels et agric"
    },
    {
      id: 22320000,
      libelle: "pour bâtiments administratifs et co"
    },
    {
      id: 22340000,
      libelle: "pour bâtiments affectés aux autres"
    },
    {
      id: 22350000,
      libelle: "pour bâtiments affectés aux autres"
    },
    {
      id: 22380000,
      libelle: "Autres terrains bâtis"
    },
    {
      id: 22410000,
      libelle: "Plantation d'arbres et d'arbustes"
    },
    {
      id: 22480000,
      libelle: "Autres travaux"
    },
    {
      id: 22510000,
      libelle: "Carrières"
    },
    {
      id: 22610000,
      libelle: "Parkings"
    },
    {
      id: 22700000,
      libelle: "TERRAINS MIS EN CONCESSION"
    },
    {
      id: 22810000,
      libelle: "Terrains - immeubles de placement"
    },
    {
      id: 22850000,
      libelle: "Terrains des logements affectés au"
    },
    {
      id: 22880000,
      libelle: "Divers terrains"
    },
    {
      id: 22910000,
      libelle: "Terrains agricoles et forestiers"
    },
    {
      id: 22920000,
      libelle: "Terrains nus"
    },
    {
      id: 22950000,
      libelle: "Terrains de carrieres -trefonds"
    },
    {
      id: 22980000,
      libelle: "Autres terrains"
    },
    {
      id: 23110000,
      libelle: "Bâtiments industriels"
    },
    {
      id: 23120000,
      libelle: "Bâtiments agricoles"
    },
    {
      id: 23130000,
      libelle: "Bâtiments administratifs et commerc"
    },
    {
      id: 23140000,
      libelle: "Bâtiments affectés au logement du p"
    },
    {
      id: 23150000,
      libelle: "Immeubles de placement"
    },
    {
      id: 23210000,
      libelle: "Bâtiments industriels"
    },
    {
      id: 23220000,
      libelle: "Bâtiments agricoles"
    },
    {
      id: 23230000,
      libelle: "Bâtiments administratifs et commerc"
    },
    {
      id: 23240000,
      libelle: "Bâtiments affectés au logement du p"
    },
    {
      id: 23250000,
      libelle: "Immeubles de placement"
    },
    {
      id: 23310000,
      libelle: "Voies de terre"
    },
    {
      id: 23320000,
      libelle: "Voies de fer"
    },
    {
      id: 23330000,
      libelle: "Voies d’eau"
    },
    {
      id: 23340000,
      libelle: "Barrages, Digues"
    },
    {
      id: 23350000,
      libelle: "Pistes d’aérodrome"
    },
    {
      id: 23380000,
      libelle: "Autres"
    },
    {
      id: 23410000,
      libelle: "Installations complexes spécialisée"
    },
    {
      id: 23420000,
      libelle: "Installations complexes spécialisée"
    },
    {
      id: 23430000,
      libelle: "Installations à caractère spécifiqu"
    },
    {
      id: 23440000,
      libelle: "Installations à caractère spécifiqu"
    },
    {
      id: 23500000,
      libelle: "Compte à créer"
    },
    {
      id: 23510000,
      libelle: "Installations générales"
    },
    {
      id: 23580000,
      libelle: "Autres Amenagements de bureaux"
    },
    {
      id: 23700000,
      libelle: "BÂTIMENTS INDUSTRIELS, AGRICOLES ET"
    },
    {
      id: 23800000,
      libelle: "Autres installations et agencements"
    },
    {
      id: 238,
   libelle: "AUTRES INSTALLATIONS ET AGENCEMENTS"
    },
    {
      id: 23900000,
      libelle: "BATIMENTS ET INSTALLATIONS ENCOURS"
    },
    {
      id: 23910000,
      libelle: "BÂTIMENTS  EN COURS"
    },
    {
      id: 23920000,
      libelle: "Installations en cours"
    },
    {
      id: 23950000,
      libelle: "Amenagements de bureaux en cours"
    },
    {
      id: 23,
  libelle: "BATIM.INSTALL.TECHNIQ.ET AMENAGEME"
    },
    {
      id: 24110000,
      libelle: "Matériel industriel"
    },
    {
      id: 24120000,
      libelle: "Outillage industriel"
    },
    {
      id: 24130000,
      libelle: "Matériel commercial"
    },
    {
      id: 24140000,
      libelle: "Outillage commercial"
    },
    {
      id: 241,
   libelle: "MAT ET OUT INDUST ET COM"
    },
    {
      id: 24210000,
      libelle: "Matériel agricole"
    },
    {
      id: 24220000,
      libelle: "Outillage agricole"
    },
    {
      id: 24300000,
      libelle: "MATÉRIEL D’EMBALLAGE RÉCUPÉRABLE ET"
    },
    {
      id: 24410000,
      libelle: "Matériel de bureau"
    },
    {
      id: 24420000,
      libelle: "Matériel informatique"
    },
    {
      id: 24421000,
      libelle: "Matériel Infor (Serveurs)"
    },
    {
      id: 24430000,
      libelle: "Matériel bureautique"
    },
    {
      id: 24440000,
      libelle: "Mobilier de bureau"
    },
    {
      id: 24470000,
      libelle: "Matériel et mobilier des logements"
    },
    {
      id: 244,
   libelle: "MATERIEL ET MOBILIER"
    },
    {
      id: 24510000,
      libelle: "Matériel automobilie"
    },
    {
      id: 24520000,
      libelle: "Matériel ferroviaire"
    },
    {
      id: 24530000,
      libelle: "Matériel fluvial, lagunaire"
    },
    {
      id: 24540000,
      libelle: "Matériel naval"
    },
    {
      id: 24550000,
      libelle: "Matériel aérien"
    },
    {
      id: 24580000,
      libelle: "Autres (vélo, mobylette, moto)"
    },
    {
      id: 245,
   libelle: "MATERIEL DE TRANSPORT"
    },
    {
      id: 24610000,
      libelle: "Cheptel, animaux de trait"
    },
    {
      id: 24620000,
      libelle: "Cheptel, animaux reproducteurs"
    },
    {
      id: 24630000,
      libelle: "Animaux de garde"
    },
    {
      id: 24650000,
      libelle: "Plantations agricoles"
    },
    {
      id: 24680000,
      libelle: "Autres"
    },
    {
      id: 24810000,
      libelle: "Collections et oeuvres d’art"
    },
    {
      id: 24,
  libelle: "MATERIELS"
    },
    {
      id: 25100000,
      libelle: "AVANCES ET ACOMPTES VERSÉS SUR IMMO"
    },
    {
      id: 25200000,
      libelle: "AVANCES ET ACOMPTES VERSÉS SUR IMMO"
    },
    {
      id: 26100000,
      libelle: "TITRES DE PARTICIPATION DANS DES SO"
    },
    {
      id: 26200000,
      libelle: "TITRES DE PARTICIPATION DANS DES SO"
    },
    {
      id: 26300000,
      libelle: "TITRES DE PARTICIPATION DANS DES SO"
    },
    {
      id: 26400000,
      libelle: "PARTICIPATIONS DANS DES ORGANISMES"
    },
    {
      id: 26500000,
      libelle: "PARTS DANS DES GROUPEMENTS D’INTÉRÊ"
    },
    {
      id: 26700000,
      libelle: "AUTRES TITRES DE PARTICIPATION"
    },
    {
      id: 27210000,
      libelle: "Prêts immobiliers"
    },
    {
      id: 27220000,
      libelle: "Prêts mobiliers et d’installation"
    },
    {
      id: 27280000,
      libelle: "Autres prêts au personnel"
    },
    {
      id: 27450000,
      libelle: "Titres immobilisés: Obligations"
    },
    {
      id: 27510000,
      libelle: "Dépôts pour loyers d’avance"
    },
    {
      id: 27520000,
      libelle: "Dépôts pour l’électricité"
    },
    {
      id: 27530000,
      libelle: "Dépôts pour l’eau"
    },
    {
      id: 27540000,
      libelle: "Dépôts pour le gaz"
    },
    {
      id: 27550000,
      libelle: "Dépôts pour le téléphone, le télex,"
    },
    {
      id: 27560000,
      libelle: "Cautionnements sur marchés publics"
    },
    {
      id: 27570000,
      libelle: "Cautionnements sur autres opératio"
    },
    {
      id: 27580000,
      libelle: "Autres dépôts et cautionnements"
    },
    {
      id: 27581000,
      libelle: "Garantie Affacturage"
    },
    {
      id: 275,
   libelle: "DEPOTS ET CAUTIONNEMENTS VERSES"
    },
    {
      id: 27610000,
      libelle: "Prêts et créances non commerciales"
    },
    {
      id: 27620000,
      libelle: "Prêts au personnel"
    },
    {
      id: 27630000,
      libelle: "Créances sur l'Etat"
    },
    {
      id: 27640000,
      libelle: "Titres immobilisés"
    },
    {
      id: 27650000,
      libelle: "Dépôts et cautionnements versés"
    },
    {
      id: 27670000,
      libelle: "Créances rattachées à des participa"
    },
    {
      id: 27680000,
      libelle: "Immobilisations financières diverse"
    },
    {
      id: 27,
  libelle: "AUTRES IMMOBILISATIONS FINANCIERES"
    },
    {
      id: 28110000,
      libelle: "Amortissements des frais de dévelop"
    },
    {
      id: 28120000,
      libelle: "Amort des brevets, licences, conce"
    },
    {
      id: 28130000,
      libelle: "Amortissements des logiciels et sit"
    },
    {
      id: 28140000,
      libelle: "Amortissements des marques"
    },
    {
      id: 28150000,
      libelle: "Amortissements du fonds commercial"
    },
    {
      id: 28160000,
      libelle: "Amortissements du droit au bail"
    },
    {
      id: 28170000,
      libelle: "Amortissements des investissements"
    },
    {
      id: 28180000,
      libelle: "Amortissements des autres droits et"
    },
    {
      id: 281,
   libelle: "AMORT DES IMMOB INCORPORELLES"
    },
    {
      id: 28240000,
      libelle: "Amortissements des travaux de mise"
    },
    {
      id: 28310000,
      libelle: "Amortissements des bâtiments indust"
    },
    {
      id: 28320000,
      libelle: "Amortissements des bâtiments indust"
    },
    {
      id: 28330000,
      libelle: "Amortissements des ouvrages d'infra"
    },
    {
      id: 28340000,
      libelle: "Amortissements des installations te"
    },
    {
      id: 28350000,
      libelle: "Amorts des aménagements de bureaux"
    },
    {
      id: 28370000,
      libelle: "Amortissements des bâtiments indust"
    },
    {
      id: 28380000,
      libelle: "Amortissements des autres installat"
    },
    {
      id: 283,
   libelle: "AMORT/BATI/INST.TECH/AGENCEMENTS"
    },
    {
      id: 28410000,
      libelle: "Amorts du mat. et out. Indus et Co"
    },
    {
      id: 28420000,
      libelle: "Amortissements du matériel et outil"
    },
    {
      id: 28430000,
      libelle: "Amortissements du matériel d'emball"
    },
    {
      id: 28440000,
      libelle: "Amortissements matériel et mobilie"
    },
    {
      id: 28441000,
      libelle: "Amorts Matériels informatiques"
    },
    {
      id: 28450000,
      libelle: "Amortissements matériel transport"
    },
    {
      id: 28460000,
      libelle: "Amortissements des actifs biologiqu"
    },
    {
      id: 28470000,
      libelle: "Amortissements des agencements et a"
    },
    {
      id: 28480000,
      libelle: "Amortissements des autres matériels"
    },
    {
      id: 284,
   libelle: "AMORTISSEMENTS DU MATERIEL"
    },
    {
      id: 28,
  libelle: "AMORTISSEMENTS"
    },
    {
      id: 29120000,
      libelle: "Dépréciation des brevets, licences,"
    },
    {
      id: 29130000,
      libelle: "Dépréciation des logiciels et sites"
    },
    {
      id: 29140000,
      libelle: "Dépréciation des marques"
    },
    {
      id: 29150000,
      libelle: "Dépréciation du fonds commercial"
    },
    {
      id: 29160000,
      libelle: "Dépréciation du droit au bail"
    },
    {
      id: 29170000,
      libelle: "Dépréciation des investissements de"
    },
    {
      id: 29180000,
      libelle: "Dépréciation des autres droits et v"
    },
    {
      id: 29190000,
      libelle: "Dépréciation des immobilisations in"
    },
    {
      id: 29210000,
      libelle: "Dépréciation des terrains agricoles"
    },
    {
      id: 29220000,
      libelle: "Dépréciation des terrains nus"
    },
    {
      id: 29230000,
      libelle: "Dépréciation des terrains bâtis"
    },
    {
      id: 29240000,
      libelle: "Dépréciation des travaux de mise en"
    },
    {
      id: 29250000,
      libelle: "Dépréciation des terrains de giseme"
    },
    {
      id: 29260000,
      libelle: "Dépréciation des terrains aménagés"
    },
    {
      id: 29270000,
      libelle: "Dépréciation des terrains mis en co"
    },
    {
      id: 29280000,
      libelle: "Dépréciation des autres terrains"
    },
    {
      id: 29290000,
      libelle: "Dépréciation des aménagements de te"
    },
    {
      id: 29310000,
      libelle: "Dépréciation des bâtiments industri"
    },
    {
      id: 29320000,
      libelle: "Dépréciation des bâtiments industri"
    },
    {
      id: 29330000,
      libelle: "Dépréciation des ouvrages d'infrast"
    },
    {
      id: 29340000,
      libelle: "Dépréciation des installations tech"
    },
    {
      id: 29350000,
      libelle: "Dépréciation des aménagements de bu"
    },
    {
      id: 29370000,
      libelle: "Dépréciation des bâtiments industri"
    },
    {
      id: 29380000,
      libelle: "Dépréciation des autres installatio"
    },
    {
      id: 29390000,
      libelle: "Dépréciation des bâtiments et insta"
    },
    {
      id: 29410000,
      libelle: "Dépréciation du matériel et outilla"
    },
    {
      id: 29420000,
      libelle: "Dépréciation du matériel et outilla"
    },
    {
      id: 29430000,
      libelle: "Dépréciation du matériel d'emballag"
    },
    {
      id: 29440000,
      libelle: "Dépréciation du matériel et mobilie"
    },
    {
      id: 29450000,
      libelle: "Dépréciation du matériel de transpo"
    },
    {
      id: 29460000,
      libelle: "Dépréciation des immobilisations an"
    },
    {
      id: 29470000,
      libelle: "Dépréciation des agencements et amé"
    },
    {
      id: 29480000,
      libelle: "Dépréciation des autres matériels"
    },
    {
      id: 29490000,
      libelle: "Dépréciation de matériel en cours"
    },
    {
      id: 29510000,
      libelle: "Dépréciation des avances et acompte"
    },
    {
      id: 29520000,
      libelle: "Dépréciation des avances et acompte"
    },
    {
      id: 29610000,
      libelle: "Dépréciation des titres de particip"
    },
    {
      id: 29620000,
      libelle: "Dépréciation des titres de particip"
    },
    {
      id: 29630000,
      libelle: "Dépréciation des titres de particip"
    },
    {
      id: 29650000,
      libelle: "Dépréciation des participations dan"
    },
    {
      id: 29660000,
      libelle: "Dépréciation des parts dans des GIE"
    },
    {
      id: 29680000,
      libelle: "Dépréciation des autres titres de p"
    },
    {
      id: 29710000,
      libelle: "Dépréciation des prêts et créances"
    },
    {
      id: 29720000,
      libelle: "Dépréciation des prêts au personnel"
    },
    {
      id: 29730000,
      libelle: "Dépréciation des créances sur l'Eta"
    },
    {
      id: 29740000,
      libelle: "Dépréciation des titres immobilisés"
    },
    {
      id: 29750000,
      libelle: "Dépréciation des dépôts et cautionn"
    },
    {
      id: 29770000,
      libelle: "Dépréciation des créances rattachée"
    },
    {
      id: 29780000,
      libelle: "Dépréciation des créances financièr"
    },
    {
      id: 2,
     libelle: "COMPTE D'ACTIF IMMOBILISE"
    },
    {
      id: 31101000,
      libelle: "Stock MHUB 801"
    },
    {
      id: 31102000,
      libelle: "Stock MHUB 918"
    },
    {
      id: 31103000,
      libelle: "Stock MHUB 828"
    },
    {
      id: 31104000,
      libelle: "Stock MHUB 701"
    },
    {
      id: 31105000,
      libelle: "Stock MHUB 918 H"
    },
    {
      id: 31106000,
      libelle: "STOCK MHUB 855"
    },
    {
      id: 31107000,
      libelle: "STOCK MHUB 837"
    },
    {
      id: 31108000,
      libelle: "STOCK MHUB 855 H"
    },
    {
      id: 31110000,
      libelle: "Stock Accesoires MHUB"
    },
    {
      id: 31110600,
      libelle: "Stock MHUB 855"
    },
    {
      id: 31110700,
      libelle: "Stock MHUB 837"
    },
    {
      id: 31110800,
      libelle: "STOCK MHUB 855H"
    },
    {
      id: 31110900,
      libelle: "STOCKS MHUB 846"
    },
    {
      id: 31120000,
      libelle: "Marchandises A2"
    },
    {
      id: 311,
   libelle: "STOCK PRODUIT SCOPE"
    },
    {
      id: 31201000,
      libelle: "Stock KIT E6"
    },
    {
      id: 31202000,
      libelle: "Stock KIT E45"
    },
    {
      id: 31210000,
      libelle: "Stock Accessoires EAGLE"
    },
    {
      id: 31210100,
      libelle: "STOCK AUTRES MARCHANDISES"
    },
    {
      id: 31210200,
      libelle: "STOCK TELTONIKA"
    },
    {
      id: 31210300,
      libelle: "STOCKS PRODUIT BCE"
    },
    {
      id: 31210400,
      libelle: "STOCKS PRODUIT ATRACK"
    },
    {
      id: 31210500,
      libelle: "STOCKS PRODUIT SQUARELL"
    },
    {
      id: 31210600,
      libelle: "STOCKS PRODUIT FALCOM"
    },
    {
      id: 31210700,
      libelle: "STOCKS PRODUIT HOWEN"
    },
    {
      id: 31210800,
      libelle: "STOCK STREAMAX"
    },
    {
      id: 31220000,
      libelle: "Marchandises B2"
    },
    {
      id: 312,
   libelle: "STOCK PRODUIT EAGLE"
    },
    {
      id: 31301000,
      libelle: "Stock Autres Marchandises"
    },
    {
      id: 31302000,
      libelle: "STOCK PRODUIT TELTONIKA"
    },
    {
      id: 31303000,
      libelle: "STOCK PRODUIT BCE"
    },
    {
      id: 31304000,
      libelle: "STOCK PRODUIT ATRACK"
    },
    {
      id: 31305000,
      libelle: "STOCK PRODUIT SQUARELL"
    },
    {
      id: 31306000,
      libelle: "STOCK PRODUIT FALCOM"
    },
    {
      id: 31307000,
      libelle: "STOCK PRODUIT HOWEN"
    },
    {
      id: 31308000,
      libelle: "STOCK FM 4200"
    },
    {
      id: 31309000,
      libelle: "STOCK FM 5300"
    },
    {
      id: 313,
   libelle: "STOCK AUTRES MARCHANDISES"
    },
    {
      id: 31800000,
      libelle: "MARCHANDISES HORS ACTIVITÉS ORDINAI"
    },
    {
      id: 31,
  libelle: "STOCK MARCHANDISES"
    },
    {
      id: 32100000,
      libelle: "MATIÈRES A"
    },
    {
      id: 32200000,
      libelle: "MATIÈRES B"
    },
    {
      id: 32300000,
      libelle: "FOURNITURES (A,B)"
    },
    {
      id: 33100000,
      libelle: "MATIÈRES CONSOMMABLES"
    },
    {
      id: 33200000,
      libelle: "FOURNITURES D'ATELIER ET D'USINE"
    },
    {
      id: 33300000,
      libelle: "FOURNITURES DE MAGASIN"
    },
    {
      id: 33400000,
      libelle: "FOURNITURES DE BUREAU"
    },
    {
      id: 33510000,
      libelle: "Emballages perdus"
    },
    {
      id: 33520000,
      libelle: "Emballages récupérables non identif"
    },
    {
      id: 33530000,
      libelle: "Emballages à usage mixte"
    },
    {
      id: 33580000,
      libelle: "Autres emballages"
    },
    {
      id: 33800000,
      libelle: "AUTRES MATIÈRES"
    },
    {
      id: 34110000,
      libelle: "Produits en cours P1"
    },
    {
      id: 34120000,
      libelle: "Produits en cours P2"
    },
    {
      id: 34210000,
      libelle: "Travaux en cours T1"
    },
    {
      id: 34220000,
      libelle: "Travaux en cours T2"
    },
    {
      id: 34310000,
      libelle: "Produits intermédiaires A"
    },
    {
      id: 34320000,
      libelle: "Produits intermédiaires B"
    },
    {
      id: 34410000,
      libelle: "Produits résiduels A"
    },
    {
      id: 34420000,
      libelle: "Produits résiduels B"
    },
    {
      id: 35110000,
      libelle: "Études en cours E1"
    },
    {
      id: 35120000,
      libelle: "Études en cours E2"
    },
    {
      id: 35210000,
      libelle: "Prestations de services S1"
    },
    {
      id: 35220000,
      libelle: "Prestations de services S2"
    },
    {
      id: 36100000,
      libelle: "PRODUITS FINIS A"
    },
    {
      id: 36200000,
      libelle: "PRODUITS FINIS B"
    },
    {
      id: 37110000,
      libelle: "Produits intermédiaires A"
    },
    {
      id: 37120000,
      libelle: "Produits intermédiaires B"
    },
    {
      id: 37210000,
      libelle: "Déchets"
    },
    {
      id: 37220000,
      libelle: "Rebuts"
    },
    {
      id: 37230000,
      libelle: "Matières de Récupération"
    },
    {
      id: 38100000,
      libelle: "MARCHANDISES EN COURS DE ROUTE"
    },
    {
      id: 38101000,
      libelle: "Stock Marchandise en cours de route"
    },
    {
      id: 38200000,
      libelle: "MATIÈRES PREMIÈRES ET FOURNITURES L"
    },
    {
      id: 38300000,
      libelle: "AUTRES APPROVISIONNEMENTS EN COURS"
    },
    {
      id: 38600000,
      libelle: "PRODUITS FINIS EN COURS DE ROUTE"
    },
    {
      id: 38710000,
      libelle: "Stock en consignation"
    },
    {
      id: 38720000,
      libelle: "Stock en dépôt"
    },
    {
      id: 38800000,
      libelle: "STOCK PROVENANT D'IMMOBILISATIONS M"
    },
    {
      id: 39100000,
      libelle: "depréciation stock marchandises"
    },
    {
      id: 39200000,
      libelle: "DÉPRÉCIATIONS DES STOCKS DE MATIÈRE"
    },
    {
      id: 39300000,
      libelle: "DÉPRÉCIATIONS DES STOCKS D'AUTRES A"
    },
    {
      id: 39400000,
      libelle: "DÉPRÉCIATIONS DES PRODUCTIONS EN CO"
    },
    {
      id: 39500000,
      libelle: "DÉPRÉCIATIONS DES SERVICES EN COURS"
    },
    {
      id: 39600000,
      libelle: "DÉPRÉCIATIONS DES STOCKS DE PRODUIT"
    },
    {
      id: 39700000,
      libelle: "DÉPRÉCIATIONS DES STOCKS DE PRODUIT"
    },
    {
      id: 39800000,
      libelle: "DÉPRÉCIATIONS DES STOCKS EN COURS D"
    },
    {
      id: 3,
     libelle: "COMPTES DE STOCKS"
    },
    {
      id: 40110000,
      libelle: "FOURNISSEURS DIVERS"
    },
    {
      id: 40111000,
      libelle: "Fournisseurs Locaux"
    },
    {
      id: 40111100,
      libelle: "FOURNISSEURS DIVERS"
    },
    {
      id: 40112000,
      libelle: "Fournisseurs étrangers"
    },
    {
      id: 40130000,
      libelle: "Fournisseurs sous-traitants"
    },
    {
      id: 40170000,
      libelle: "Fournisseur, retenues de garantie"
    },
    {
      id: 401,
   libelle: "FOURNISSEURS DETTE EN COMPTES"
    },
    {
      id: 40210000,
      libelle: "Fournisseurs, Effets à payer"
    },
    {
      id: 40220000,
      libelle: "Fournisseurs - Groupe, Effets à pay"
    },
    {
      id: 40230000,
      libelle: "Fournisseurs sous-traitants, Effets"
    },
    {
      id: 40810000,
      libelle: "Fournisseurs, Factures non parvenue"
    },
    {
      id: 40820000,
      libelle: "Fournisseurs - Groupe"
    },
    {
      id: 40830000,
      libelle: "Fournisseurs sous-traitants"
    },
    {
      id: 40860000,
      libelle: "Fournisseurs, intérêts courus"
    },
    {
      id: 40910000,
      libelle: "Fournisseurs avances,acomptes versé"
    },
    {
      id: 40920000,
      libelle: "Fournisseurs - Groupe avances et ac"
    },
    {
      id: 40930000,
      libelle: "Fournisseurs sous-traitants avances"
    },
    {
      id: 40940000,
      libelle: "Fournisseurs créances pour emballag"
    },
    {
      id: 40980000,
      libelle: "Rabais, Remises, Ristournes et autr"
    },
    {
      id: 40,
  libelle: "FOURNISSEURS ET COMPTES RATTACHES"
    },
    {
      id: 41100000,
      libelle: "Cl. CAMIR-CO"
    },
    {
      id: 41110000,
      libelle: "Cl. AFRICA FIRST LOGISTICS"
    },
    {
      id: 41111000,
      libelle: "Clients Locaux ENTREPRISES"
    },
    {
      id: 41112000,
      libelle: "Clients Locaux PARTICULIERS"
    },
    {
      id: 41113000,
      libelle: "Compte à créer"
    },
    {
      id: 41119000,
      libelle: "Clients Etrangers"
    },
    {
      id: 411ASSEM,
      libelle: "Mme ASSEMBE EPSE ZANG III SAM Anny"
    },
    {
      id: 411ROCHE,
      libelle: "ROCHE CAMEROUN SARL"
    },
    {
      id: 411,
   libelle: "CLIENTS"
    },
    {
      id: 41600000,
      libelle: "Clients douteux ou litigieux"
    },
    {
      id: 41620000,
      libelle: "Créances douteuses"
    },
    {
      id: 416,
    libelle: "CREANCES CLIENTS LITIGIEUSES/DOUTE"
    },
    {
      id: 41800000,
      libelle: "Clients, Produits non facturés"
    },
    {
      id: 41810000,
      libelle: "Clients factures à établir"
    },
    {
      id: 418,
   libelle: "CLIENTS, PRODUITS A RECEVOIR"
    },
    {
      id: 41900000,
      libelle: "CLIENTS CREDITEURS"
    },
    {
      id: 41910000,
      libelle: "Clients, avance et acompte reçus"
    },
    {
      id: 41920000,
      libelle: "Clients - Groupe, avances et acompt"
    },
    {
      id: 41940000,
      libelle: "Clients, dettes pour emballages et"
    },
    {
      id: 41980000,
      libelle: "Clients, rabais, remises à accorder"
    },
    {
      id: 41,
  libelle: "CLIENTS ET COMPTES RATTACHES"
    },
    {
      id: 42110000,
      libelle: "PERSONNEL, AVANCE"
    },
    {
      id: 42111000,
      libelle: "Avances sur Congés"
    },
    {
      id: 42120000,
      libelle: "PERSONNEL, ACOMPTE"
    },
    {
      id: 42130000,
      libelle: "PERSONNEL, ARRONDI"
    },
    {
      id: 42131000,
      libelle: "Personnel fournitures au personnel"
    },
    {
      id: 421,
   libelle: "PERSONNEL AVANCE ET ACOMPTE"
    },
    {
      id: 42200000,
      libelle: "Compte à créer"
    },
    {
      id: 42220000,
      libelle: "Personnels, Rémunérations dues"
    },
    {
      id: 42230000,
      libelle: "Personnel à l'étranger"
    },
    {
      id: 422,
   libelle: "PERSONNEL REMUNERATIONS DUES"
    },
    {
      id: 42310000,
      libelle: "Personnel, oppositions"
    },
    {
      id: 42320000,
      libelle: "Personnel, saisies-arrêts"
    },
    {
      id: 42330000,
      libelle: "Personnel, avis à tiers détenteur"
    },
    {
      id: 42410000,
      libelle: "Personnel, Assurance Maladie"
    },
    {
      id: 42420000,
      libelle: "Allocations familiales"
    },
    {
      id: 42450000,
      libelle: "Organismes sociaux rattachés à l'en"
    },
    {
      id: 42480000,
      libelle: "Autres oeuvres sociales internes"
    },
    {
      id: 42510000,
      libelle: "Délégués du personnel"
    },
    {
      id: 42520000,
      libelle: "Syndicats et Comités d'entreprises,"
    },
    {
      id: 42580000,
      libelle: "Autres représentants du personnel"
    },
    {
      id: 42600000,
      libelle: "PERSONNEL, PARTICIPATION AUX BÉNÉFI"
    },
    {
      id: 42700000,
      libelle: "PERSONNEL – DÉPÔTS"
    },
    {
      id: 42810000,
      libelle: "Dettes provisionnées pour congés à"
    },
    {
      id: 42860000,
      libelle: "Autres Charges à payer"
    },
    {
      id: 42870000,
      libelle: "Produits à recevoir"
    },
    {
      id: 42,
  libelle: "PERSONNEL"
    },
    {
      id: 43100000,
      libelle: "Sécurité sociale CNPS"
    },
    {
      id: 43110000,
      libelle: "Prestations familiales"
    },
    {
      id: 43120000,
      libelle: "Accidents de travail"
    },
    {
      id: 43130000,
      libelle: "Caisse de retraite obligatoire"
    },
    {
      id: 43140000,
      libelle: "Caisse de retraite facultative"
    },
    {
      id: 43180000,
      libelle: "Autres cotisations sociales"
    },
    {
      id: 43181000,
      libelle: "Sécurité Sociale CNPS"
    },
    {
      id: 431,
   libelle: "SECURITE SOCIALE"
    },
    {
      id: 43200000,
      libelle: "CAISSES DE RETRAITE COMPLÉMENTAIRE"
    },
    {
      id: 43310000,
      libelle: "Mutuelle"
    },
    {
      id: 43810000,
      libelle: "Charges sociales sur gratifications"
    },
    {
      id: 43820000,
      libelle: "Charges sociales sur congés à payer"
    },
    {
      id: 43860000,
      libelle: "Autres charges à payer"
    },
    {
      id: 43870000,
      libelle: "Produits à recevoir"
    },
    {
      id: 43,
  libelle: "ORGANISMES SOCIAUX"
    },
    {
      id: 44100000,
      libelle: "Etat, impôts sur les bénéfices"
    },
    {
      id: 44110000,
      libelle: "Etat,  d'IS à payer"
    },
    {
      id: 44120000,
      libelle: "IS PAYER"
    },
    {
      id: 441,
   libelle: "ETAT, IMPOTS SUR LES BENEFICES"
    },
    {
      id: 44210000,
      libelle: "Impôts et taxes d'Etat"
    },
    {
      id: 44220000,
      libelle: "Impôts et taxes pour les collectivi"
    },
    {
      id: 44230000,
      libelle: "Impôts et taxes recouvrables sur de"
    },
    {
      id: 44240000,
      libelle: "Impôts et taxes recouvrables sur de"
    },
    {
      id: 44260000,
      libelle: "Droits de douane"
    },
    {
      id: 44280000,
      libelle: "Etat autres impots et taxes"
    },
    {
      id: 44310000,
      libelle: "TVA facturée sur ventes"
    },
    {
      id: 44320000,
      libelle: "TVA facturée sur prestation service"
    },
    {
      id: 44321000,
      libelle: "ETAT TVA FACTUREE SUR PRESTATIONS D"
    },
    {
      id: 44322000,
      libelle: "TVA/FACTUREE SUR SERVICES /AVOIRS"
    },
    {
      id: 44330000,
      libelle: "TVA facturée sur ventes à 16,5%"
    },
    {
      id: 44350000,
      libelle: "TVA SUR FACTURE A ETABLIR"
    },
    {
      id: 44360000,
      libelle: "TVA SUR FACTURE A ETABLIR"
    },
    {
      id: 44390000,
      libelle: "TVA facturée/retenue à la source"
    },
    {
      id: 443,
   libelle: "ETAT, TVA FACTUREE"
    },
    {
      id: 44410000,
      libelle: "Etat, TVA due"
    },
    {
      id: 44411000,
      libelle: "TVA PAYEE"
    },
    {
      id: 44490000,
      libelle: "Etat, crédit de TVA à reporter"
    },
    {
      id: 44491000,
      libelle: "TVA /RAS PAR LES CLIENTS"
    },
    {
      id: 444,
   libelle: "ETAT, TVA DUE OU CREDIT DE TVA"
    },
    {
      id: 44510000,
      libelle: "TVA recupérable sur immobilisation"
    },
    {
      id: 44520000,
      libelle: "TVA récupérable sur achats"
    },
    {
      id: 44530000,
      libelle: "TVA récupérable sur transports"
    },
    {
      id: 44540000,
      libelle: "TVA récupérable sur services extér"
    },
    {
      id: 44541000,
      libelle: "ETAT TVA A REGULARISER"
    },
    {
      id: 44550000,
      libelle: "TVA Recup/factures non parvenues"
    },
    {
      id: 44580000,
      libelle: "TVA récupérable déclarée"
    },
    {
      id: 445,
   libelle: "ETAT, TVA  RECUPERABLE"
    },
    {
      id: 44600000,
      libelle: "ÉTAT, AUTRES TAXES SUR LE CHIFFRE D"
    },
    {
      id: 44700000,
      libelle: "TVA/RAS"
    },
    {
      id: 44710000,
      libelle: "ACOMPTE 5.5% RETENU A LA SOURCE"
    },
    {
      id: 44711000,
      libelle: "Impôt Général sur le revenu"
    },
    {
      id: 44711200,
      libelle: "ACOMPTE RETENU A LA SOURCE ETRANGER"
    },
    {
      id: 44720000,
      libelle: "Impôts sur salaires"
    },
    {
      id: 44730000,
      libelle: "Contribution nationale"
    },
    {
      id: 44740000,
      libelle: "Contribution nationale de solidarit"
    },
    {
      id: 44780000,
      libelle: "Précompte10%sur loyer"
    },
    {
      id: 447,
   libelle: "ETAT, IMPOTS RETENUS A LA SOURCE"
    },
    {
      id: 44860000,
      libelle: "ETAT CHARGES A PAYER"
    },
    {
      id: 44870000,
      libelle: "Produits à recevoir"
    },
    {
      id: 44910000,
      libelle: "État, obligations cautionnées"
    },
    {
      id: 44920000,
      libelle: "Etat, IS retenue à la source"
    },
    {
      id: 44921000,
      libelle: "Etat, acomptes IS versés"
    },
    {
      id: 44930000,
      libelle: "État, fonds de dotation à recevoir"
    },
    {
      id: 44940000,
      libelle: "État, subventions d'équipement à re"
    },
    {
      id: 44950000,
      libelle: "État, subventions d'exploitation à"
    },
    {
      id: 44960000,
      libelle: "État, subventions d'équilibre à rec"
    },
    {
      id: 44990000,
      libelle: "État, fonds réglementé provisionné"
    },
    {
      id: 449,
   libelle: "ETAT, CREANCES ET DETTES DIVERSES"
    },
    {
      id: 44,
  libelle: "TOTAL 44"
    },
    {
      id: 45100000,
      libelle: "OPÉRATIONS AVEC LES ORGANISMES AFRI"
    },
    {
      id: 45200000,
      libelle: "OPÉRATIONS AVEC LES AUTRES ORGANISM"
    },
    {
      id: 45810000,
      libelle: "Organismes internationaux, fonds de"
    },
    {
      id: 45820000,
      libelle: "Organismes internationaux, subventi"
    },
    {
      id: 46110000,
      libelle: "Associés apports en nature"
    },
    {
      id: 46120000,
      libelle: "Associés apports en numéraire"
    },
    {
      id: 46130000,
      libelle: "Actionnaires, capital souscrit appe"
    },
    {
      id: 46140000,
      libelle: "Associés, capital appelé non versé"
    },
    {
      id: 46150000,
      libelle: "Associés, versements reçus sur augm"
    },
    {
      id: 46160000,
      libelle: "Associés, versements anticipés"
    },
    {
      id: 46170000,
      libelle: "Actionnaires défaillants"
    },
    {
      id: 46180000,
      libelle: "Associés, autres apports"
    },
    {
      id: 46190000,
      libelle: "Associés, capital à rembourser"
    },
    {
      id: 46200100,
      libelle: "COMPTE COURANT 1"
    },
    {
      id: 46200200,
      libelle: "COMPTE COURANT TINEN TOUOLAC HILAI"
    },
    {
      id: 46200300,
      libelle: "COMPTE COURANT 3"
    },
    {
      id: 46200400,
      libelle: "COMPTE COURANT MME KAMANI"
    },
    {
      id: 46200500,
      libelle: "COMPTE COURANT 4"
    },
    {
      id: 46200600,
      libelle: "Compte à créer"
    },
    {
      id: 46200700,
      libelle: "COMPTE COURANT FOTSO FABRICE ERIC"
    },
    {
      id: 46210000,
      libelle: "Principal"
    },
    {
      id: 46210200,
      libelle: "COMPTE COURANT TINEN TOUOLAC HILAI"
    },
    {
      id: 46260000,
      libelle: "Intérêts courus"
    },
    {
      id: 46261000,
      libelle: "Interets courus compte courant asso"
    },
    {
      id: 462,
   libelle: "ASSOCIES, COMPTES COURANTS"
    },
    {
      id: 46300000,
      libelle: "ASSOCIÉS, OPÉRATIONS FAITES EN COMM"
    },
    {
      id: 46500000,
      libelle: "ASSOCIÉS, DIVIDENDES À PAYER"
    },
    {
      id: 46600000,
      libelle: "GROUPE, COMPTES COURANTS"
    },
    {
      id: 46700000,
      libelle: "ACTIONNAIRES, RESTANT DÛ SUR CAPITA"
    },
    {
      id: 46,
  libelle: "ASSOCIES - GROUPE"
    },
    {
      id: 47110000,
      libelle: "Débiteurs divers"
    },
    {
      id: 47111000,
      libelle: "FOTSO FABRICE ERIC"
    },
    {
      id: 47112000,
      libelle: "TOUOLAC"
    },
    {
      id: 47113000,
      libelle: "DEBITEURS DIVERS COMMISSIONS"
    },
    {
      id: 47114000,
      libelle: "Autres debiteurs"
    },
    {
      id: 47115000,
      libelle: "COMPTE D ATTENTE SOLDE A REGULARISE"
    },
    {
      id: 47116000,
      libelle: "DEBITEURS MADAGASCAR"
    },
    {
      id: 47117000,
      libelle: "DEBITEURS OUGANDA"
    },
    {
      id: 47118000,
      libelle: "DEBITEURS NIGERIA"
    },
    {
      id: 47120000,
      libelle: "Créditeurs divers"
    },
    {
      id: 47121000,
      libelle: "FOTSO  FABRICE ERIC CRED"
    },
    {
      id: 47124000,
      libelle: "Compte d'attente"
    },
    {
      id: 47126000,
      libelle: "CREDITEURS EMPRUNT CBC"
    },
    {
      id: 47127000,
      libelle: "CREDITEURS EMPRUNT BICEC"
    },
    {
      id: 47128000,
      libelle: "CREDITEURS DIVERS SGC"
    },
    {
      id: 47130000,
      libelle: "Missions"
    },
    {
      id: 47140000,
      libelle: "Compte d'attente"
    },
    {
      id: 47150000,
      libelle: "SSG"
    },
    {
      id: 47160000,
      libelle: "Compte RAN"
    },
    {
      id: 47170000,
      libelle: "Caisse Attente"
    },
    {
      id: 471,
   libelle: "COMPTES D'ATTENTE"
    },
    {
      id: 47260000,
      libelle: "Versements restant à effectuer sur"
    },
    {
      id: 47460000,
      libelle: "Compte de réparation périodique des"
    },
    {
      id: 47470000,
      libelle: "Compte de réparation periodique des"
    },
    {
      id: 47510000,
      libelle: "Compte transitoire, Compte actif"
    },
    {
      id: 47520000,
      libelle: "Compte passif"
    },
    {
      id: 47600000,
      libelle: "Charges constatées d'avance"
    },
    {
      id: 476,
   libelle: "CHARGES CONSTATEES D'AVANCE"
    },
    {
      id: 47700000,
      libelle: "Produits constatés d'avance"
    },
    {
      id: 477,
   libelle: "PRODUITS CONSTATES D'AVANCE"
    },
    {
      id: 47810000,
      libelle: "ECART DE CONVERT DIMUNITION CREANCE"
    },
    {
      id: 47820000,
      libelle: "ECART DE CONVERT AUGMENTATION DETTE"
    },
    {
      id: 47880000,
      libelle: "Différences compensées par couvertu"
    },
    {
      id: 47910000,
      libelle: "Augmentation des créances d'exploit"
    },
    {
      id: 47920000,
      libelle: "Diminution des creances financières"
    },
    {
      id: 47980000,
      libelle: "Différences compensées par couvertu"
    },
    {
      id: 47,
  libelle: "TOTAL 47"
    },
    {
      id: 48110000,
      libelle: "Immobilisations incorporelles"
    },
    {
      id: 48120000,
      libelle: "Immobilisations corporelles"
    },
    {
      id: 48170000,
      libelle: "Retenues de garantie"
    },
    {
      id: 48180000,
      libelle: "Factures non parvenues"
    },
    {
      id: 48200000,
      libelle: "FOURNISSEURS D'INVESTISSEMENTS, EFF"
    },
    {
      id: 48510000,
      libelle: "En compte, immobilisations incorpor"
    },
    {
      id: 48520000,
      libelle: "En compte, immobilisations corporel"
    },
    {
      id: 48570000,
      libelle: "Retenues de garantie"
    },
    {
      id: 48580000,
      libelle: "Factures à établir"
    },
    {
      id: 48800000,
      libelle: "AUTRES CRÉANCES HORS ACTIVITÉS ORDI"
    },
    {
      id: 49000000,
      libelle: "DÉPRÉCIATIONS DES COMPTES FOURNISSE"
    },
    {
      id: 49100000,
      libelle: "PROV DEPRECIATION TIERS"
    },
    {
      id: 49110000,
      libelle: "Créances litigieuses"
    },
    {
      id: 49120000,
      libelle: "DEPRECIATIONS DES COMPTES TIERS"
    },
    {
      id: 491,
   libelle: "DEPRECIATION DES COMPTES CLIENTS"
    },
    {
      id: 49200000,
      libelle: "DÉPRÉCIATIONS DES COMPTES PERSONNEL"
    },
    {
      id: 49300000,
      libelle: "DÉPRÉCIATIONS DES COMPTES ORGANISME"
    },
    {
      id: 49400000,
      libelle: "DÉPRÉCIATIONS DES COMPTES ÉTAT ET C"
    },
    {
      id: 49500000,
      libelle: "DÉPRÉCIATIONS DES COMPTES ORGANISME"
    },
    {
      id: 49620000,
      libelle: "Associés, comptes courants"
    },
    {
      id: 49630000,
      libelle: "Associés, opérations faites en comm"
    },
    {
      id: 49660000,
      libelle: "Groupe, comptes courants"
    },
    {
      id: 49700000,
      libelle: "DEPRECIATIONS DES COMPTES"
    },
    {
      id: 49810000,
      libelle: "Créances sur cessions d'immobilisat"
    },
    {
      id: 49820000,
      libelle: "Créances sur cessions de titres de"
    },
    {
      id: 49830000,
      libelle: "Autres créances H.A.O."
    },
    {
      id: 49,
  libelle: "DEPRECIATIONS ET RISQUES PROVISION"
    },
    {
      id: 4,
     libelle: "COMPTES DE TIERS"
    },
    {
      id: 50110000,
      libelle: "Titres du Trésor à court terme"
    },
    {
      id: 50120000,
      libelle: "Titres d'organismes financiers"
    },
    {
      id: 50130000,
      libelle: "Bons de caisse à court terme"
    },
    {
      id: 50210000,
      libelle: "Actions ou parts propres"
    },
    {
      id: 50220000,
      libelle: "Actions cotées"
    },
    {
      id: 50230000,
      libelle: "Actions non cotées"
    },
    {
      id: 50240000,
      libelle: "\"Actions démembrées (certificats d'"
    },
    {
      id: 50250000,
      libelle: "Autres titres conférant un droit de"
    },
    {
      id: 50310000,
      libelle: "Obligations émises par la société e"
    },
    {
      id: 50320000,
      libelle: "Obligations cotées"
    },
    {
      id: 50330000,
      libelle: "Obligations non cotées"
    },
    {
      id: 50350000,
      libelle: "Autres titres conférant un droit de"
    },
    {
      id: 50420000,
      libelle: "Bons de souscription d'actions"
    },
    {
      id: 50430000,
      libelle: "Bons de souscription d'obligations"
    },
    {
      id: 50500000,
      libelle: "TITRES NÉGOCIABLES HORS REGION"
    },
    {
      id: 50610000,
      libelle: "Titres du Trésor et bons de caisse"
    },
    {
      id: 50620000,
      libelle: "Actions"
    },
    {
      id: 50630000,
      libelle: "Obligations"
    },
    {
      id: 50700000,
      libelle: "AUTRES TITRES DE PLACEMENT ET CREAN"
    },
    {
      id: 50810000,
      libelle: "DEPOT A TERME"
    },
    {
      id: 508,
   libelle: "AUTRES VALEURS ASSIMILEES"
    },
    {
      id: 50,
  libelle: "TITRES DE PLACEMENT"
    },
    {
      id: 51100000,
      libelle: "EFFETS À ENCAISSER"
    },
    {
      id: 51200000,
      libelle: "EFFETS À L'ENCAISSEMENT"
    },
    {
      id: 51300000,
      libelle: "CHÈQUES À ENCAISSER"
    },
    {
      id: 51400000,
      libelle: "CHÈQUES À L'ENCAISSEMENT"
    },
    {
      id: 51500000,
      libelle: "CARTES DE CRÉDIT À ENCAISSER"
    },
    {
      id: 51810000,
      libelle: "Warrants"
    },
    {
      id: 51820000,
      libelle: "Billets de fonds"
    },
    {
      id: 51850000,
      libelle: "Chèques de voyage"
    },
    {
      id: 51860000,
      libelle: "Coupons échus"
    },
    {
      id: 51870000,
      libelle: "Intérêts échus des obligations"
    },
    {
      id: 518,
   libelle: "AUTRES VALEURS A L'ENCAISSEMENT"
    },
    {
      id: 51,
  libelle: "VALEUR A ENCAISSER"
    },
    {
      id: 52110000,
      libelle: "CBC N° 37120798101-64"
    },
    {
      id: 52111000,
      libelle: "BC-PME N°00199500101-01"
    },
    {
      id: 52112000,
      libelle: "UBA N°09011000083-71"
    },
    {
      id: 52112100,
      libelle: "SGC PLACEMENT  N°56010717613-07"
    },
    {
      id: 52112900,
      libelle: "SGC N°05010619026-76"
    },
    {
      id: 52113000,
      libelle: "BICEC N° 30014500001-09"
    },
    {
      id: 52114000,
      libelle: "ECOBANK N°01231060701-51"
    },
    {
      id: 52116000,
      libelle: "BNP PARIBAS 01288 000100219 87"
    },
    {
      id: 52117000,
      libelle: "AFRILAND N°05538521001-87"
    },
    {
      id: 52118000,
      libelle: "AMICALE FINANCE"
    },
    {
      id: 52119000,
      libelle: "BGFI N° 40001773011-51"
    },
    {
      id: 52119100,
      libelle: "AFI"
    },
    {
      id: 52120000,
      libelle: "SGC N°05010619026 - 76"
    },
    {
      id: 52121000,
      libelle: "SGC N°56010717613-07 PLACEMENT"
    },
    {
      id: 52130000,
      libelle: "BICEC N° 30014500001-09"
    },
    {
      id: 52140000,
      libelle: "BICEC2 N°30014500018-55"
    },
    {
      id: 52150000,
      libelle: "BICEC3 N°30014500021-46"
    },
    {
      id: 52160000,
      libelle: "BNP PARIBAS 01288 000100219 87"
    },
    {
      id: 52170000,
      libelle: "SGBC N° 05010300789 - 16"
    },
    {
      id: 52180000,
      libelle: "AFI"
    },
    {
      id: 52190000,
      libelle: "BGFI BANK"
    },
    {
      id: 521,
   libelle: "BANQUES LOCALES"
    },
    {
      id: 52200000,
      libelle: "BANQUES AUTRES ÉTATS REGION"
    },
    {
      id: 522,
   libelle: "BANQUES ETRAGERES"
    },
    {
      id: 52300000,
      libelle: "BANQUES AUTRES ETATS ZONE MONETAIRE"
    },
    {
      id: 52400000,
      libelle: "BANQUES HORS ZONE MONETAIRE"
    },
    {
      id: 52600000,
      libelle: "BANQUES, INTERETS COURUS"
    },
    {
      id: 52,
  libelle: "BANQUES"
    },
    {
      id: 53100000,
      libelle: "CHÈQUES POSTAUX"
    },
    {
      id: 53200000,
      libelle: "TRÉSOR"
    },
    {
      id: 53300000,
      libelle: "SOCIÉTÉS DE GESTION ET D'INTERMÉDIA"
    },
    {
      id: 53310000,
      libelle: "SUP AFFACTURAGE 30014500025-34"
    },
    {
      id: 53600000,
      libelle: "ETABLISSEMENTS FINANCIERS, INTERETS"
    },
    {
      id: 53800000,
      libelle: "AUTRES ORGANISMES FINANCIERS"
    },
    {
      id: 53,
  libelle: "ETABLISSEMENTS FINANCIERS ET ASSIMI"
    },
    {
      id: 54100000,
      libelle: "OPTIONS DE TAUX D'INTÉRÊT"
    },
    {
      id: 54200000,
      libelle: "OPTIONS DE TAUX DE CHANGE"
    },
    {
      id: 54300000,
      libelle: "OPTIONS DE TAUX BOURSIERS"
    },
    {
      id: 54400000,
      libelle: "INSTRUMENTS DE MARCHÉS À TERME"
    },
    {
      id: 55410000,
      libelle: "CAISSE ORANGE MONEY"
    },
    {
      id: 55420000,
      libelle: "CAISSE MTN MOBILE MONEY"
    },
    {
      id: 56100000,
      libelle: "ERREUR"
    },
    {
      id: 56400000,
      libelle: "ESCOMPTE DE CRÉDITS DE CAMPAGNE"
    },
    {
      id: 56500000,
      libelle: "ESCOMPTE DE CRÉDITS ORDINAIRES"
    },
    {
      id: 56610000,
      libelle: "BANQUE CREDIT DE TRESORERIE"
    },
    {
      id: 57110000,
      libelle: "CAISSE PRINCIPALE"
    },
    {
      id: 57112000,
      libelle: "CAISSE YAOUNDE"
    },
    {
      id: 57113000,
      libelle: "CAISSE GAROUA"
    },
    {
      id: 57120000,
      libelle: "CAISSE YAOUNDE"
    },
    {
      id: 57130000,
      libelle: "CAISSE GAROUA"
    },
    {
      id: 57140000,
      libelle: "CAISSE ORANGE MONEY"
    },
    {
      id: 57150000,
      libelle: "CAISSE MTN MOBILE MONEY"
    },
    {
      id: 571,
   libelle: "CAISSE SIEGE SOCIAL"
    },
    {
      id: 57210000,
      libelle: "en unités monétaires légales"
    },
    {
      id: 57220000,
      libelle: "en devises"
    },
    {
      id: 57310000,
      libelle: "en monétaires nationales"
    },
    {
      id: 57320000,
      libelle: "en devises"
    },
    {
      id: 57,
  libelle: "CAISSE"
    },
    {
      id: 58100000,
      libelle: "RÉGIES D'AVANCE"
    },
    {
      id: 58200000,
      libelle: "ACCRÉDITIFS"
    },
    {
      id: 58500000,
      libelle: "VIREMENTS DE FONDS"
    },
    {
      id: 58510000,
      libelle: "Virements de fonds BICEC"
    },
    {
      id: 58511000,
      libelle: "Virement de fonds BC-PME"
    },
    {
      id: 58512000,
      libelle: "VIREMENT DE FONDS AFFACTURAGE"
    },
    {
      id: 58513000,
      libelle: "VIREMENT DE FONDS UBA"
    },
    {
      id: 58514000,
      libelle: "VIREMENT DE FONDS AFRILAND"
    },
    {
      id: 58515000,
      libelle: "Virement de fonds Ecobank"
    },
    {
      id: 58520000,
      libelle: "Virements de fonds CBC"
    },
    {
      id: 58530000,
      libelle: "VIREMENT BNP"
    },
    {
      id: 58540000,
      libelle: "Virement de fond AFI"
    },
    {
      id: 58550000,
      libelle: "Virement de fonds bgfi"
    },
    {
      id: 58560000,
      libelle: "Virement de fond caisse"
    },
    {
      id: 58561000,
      libelle: "VIREMENT DE FONDS CAISSE ORANGE MON"
    },
    {
      id: 58562000,
      libelle: "VIREMENT DE FONDS CAISSE MTN MONEY"
    },
    {
      id: 58570000,
      libelle: "VIREMENT DE FONDS BANQUES"
    },
    {
      id: 58580000,
      libelle: "VIREMENT DE FONDS SGBC"
    },
    {
      id: 58590000,
      libelle: "Virement de fonds SGC"
    },
    {
      id: 58591000,
      libelle: "VIREMENT DE FONDS SGC PLACEMENT"
    },
    {
      id: 585,
   libelle: "VIREMENTS DE FONDS"
    },
    {
      id: 58800000,
      libelle: "AUTRES VIREMENTS INTERNES"
    },
    {
      id: 58,
  libelle: "REGIES D'AVANCES ACCREDITIFS VRT I"
    },
    {
      id: 59000000,
      libelle: "DÉPRÉCIATIONS DES TITRES DE PLACEME"
    },
    {
      id: 59100000,
      libelle: "DÉPRÉCIATIONS DES TITRES ET VALEURS"
    },
    {
      id: 59200000,
      libelle: "DÉPRÉCIATIONS DES COMPTES BANQUES"
    },
    {
      id: 59300000,
      libelle: "DÉPRÉCIATIONS DES COMPTES ÉTABLISSE"
    },
    {
      id: 59400000,
      libelle: "DÉPRÉCIATIONS DES COMPTES D’INSTRUM"
    },
    {
      id: 59900000,
      libelle: "RISQUES PROVISIONNÉS À CARACTÈRE FI"
    },
    {
      id: 5,
     libelle: "COMPTES DE TRESORERIE"
    },
    {
      id: 60110000,
      libelle: "ACHATS M/SES  SCOPE"
    },
    {
      id: 60110100,
      libelle: "Achats MHUB 801"
    },
    {
      id: 60110200,
      libelle: "Achats MHUB 918"
    },
    {
      id: 60110300,
      libelle: "Achats MHUB 828"
    },
    {
      id: 60110400,
      libelle: "Achats MHUB 701"
    },
    {
      id: 60110500,
      libelle: "Achats MHUB 918H Iridium"
    },
    {
      id: 60111000,
      libelle: "Achats Accesoires MHUB"
    },
    {
      id: 60111001,
      libelle: "ACHAT MHUB 855"
    },
    {
      id: 60111002,
      libelle: "ACHAT MHUB 846"
    },
    {
      id: 60111003,
      libelle: "ACHAT MHUB 855H"
    },
    {
      id: 60115000,
      libelle: "Frais de Douane"
    },
    {
      id: 60120000,
      libelle: "hors Région"
    },
    {
      id: 60120100,
      libelle: "Achat  MHUB 801"
    },
    {
      id: 60120110,
      libelle: "Achat FM 500 LIGHT"
    },
    {
      id: 60120200,
      libelle: "Achat KIT MHUB 918"
    },
    {
      id: 60120204,
      libelle: "Achat KIT MHUB 855H"
    },
    {
      id: 60120300,
      libelle: "Achats MHUB 701 Vermeil"
    },
    {
      id: 60120400,
      libelle: "Achats MHUB 828 Bronze"
    },
    {
      id: 60120410,
      libelle: "Achat MHUB 828 Bronze"
    },
    {
      id: 60120500,
      libelle: "Achats MHUB 918H Iridium"
    },
    {
      id: 60120600,
      libelle: "Achat boitier vermeil BOFAN"
    },
    {
      id: 60120700,
      libelle: "ACHATS ALARME"
    },
    {
      id: 60120800,
      libelle: "ACHATS MT2000"
    },
    {
      id: 60120900,
      libelle: "Achats accessoires"
    },
    {
      id: 60121000,
      libelle: "ACHAT VIDEO SURVEILLANCE"
    },
    {
      id: 60121001,
      libelle: "ACHAT MHUB 855"
    },
    {
      id: 60121002,
      libelle: "ACHAT MHUB 846"
    },
    {
      id: 60121100,
      libelle: "ACHAT CONTROLE D'ACCES"
    },
    {
      id: 60121101,
      libelle: "Achat HOWEN"
    },
    {
      id: 60121200,
      libelle: "Achat FM 500 BLUEU"
    },
    {
      id: 60121300,
      libelle: "Achat accessoires BCE"
    },
    {
      id: 60121500,
      libelle: "ACHAT AK1"
    },
    {
      id: 60121600,
      libelle: "Achat AT5V"
    },
    {
      id: 60121700,
      libelle: "Achat AT5I"
    },
    {
      id: 60121800,
      libelle: "Achat AX7"
    },
    {
      id: 60121900,
      libelle: "Achats autres Marchandises"
    },
    {
      id: 60121910,
      libelle: "Achats TELTONIKA"
    },
    {
      id: 60122100,
      libelle: "Compte à créer"
    },
    {
      id: 60122200,
      libelle: "Compte à créer"
    },
    {
      id: 60122300,
      libelle: "Compte à créer"
    },
    {
      id: 60122400,
      libelle: "Achat SOLIDJ 803601"
    },
    {
      id: 60122500,
      libelle: "Achat ACCESSOIRES SQUARELL"
    },
    {
      id: 60122600,
      libelle: "Achat FOX3-2G"
    },
    {
      id: 60122700,
      libelle: "Achat accessoires FALCOM"
    },
    {
      id: 6012,
    libelle: "ACHAT M/SES HORS REGION"
    },
    {
      id: 60130000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 60130100,
      libelle: "ACHAT FM 500 LIGHT"
    },
    {
      id: 60130200,
      libelle: "ACHAT FM 500 BLUEU"
    },
    {
      id: 60130300,
      libelle: "ACHAT ACCESSOIRES BCE"
    },
    {
      id: 6013,
    libelle: "ACHAT M'SES BCE"
    },
    {
      id: 60140000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 60140100,
      libelle: "ACHAT AK 1"
    },
    {
      id: 60140200,
      libelle: "ACHAT AT5V"
    },
    {
      id: 60140300,
      libelle: "ACHAT AT5I"
    },
    {
      id: 60140400,
      libelle: "ACHAT AX7"
    },
    {
      id: 60140500,
      libelle: "ACHAT AL7"
    },
    {
      id: 60140600,
      libelle: "ACHAT ACCESSOIRES ATRACK"
    },
    {
      id: 6014,
    libelle: "ACHAT M'SES ATRACK"
    },
    {
      id: 60150000,
      libelle: "Frais de Douane"
    },
    {
      id: 60151000,
      libelle: "Frais de Douane MHUB 828"
    },
    {
      id: 60151100,
      libelle: "Frais Douane MHUB 828"
    },
    {
      id: 60152000,
      libelle: "Frais de Douane MHUB 701"
    },
    {
      id: 60153000,
      libelle: "Frais de Douane MHUB 918H"
    },
    {
      id: 6015,
    libelle: "FRAIS DE DOUANE"
    },
    {
      id: 60160100,
      libelle: "ACHAT SOLID 803602"
    },
    {
      id: 60160200,
      libelle: "ACHAT SOLIDJ 803601"
    },
    {
      id: 60160300,
      libelle: "ACHAT ACCESSOIRES SQUARELL"
    },
    {
      id: 6016,
    libelle: "ACHAT SQUARELL"
    },
    {
      id: 60170100,
      libelle: "ACHAT FOX3-2G"
    },
    {
      id: 60170200,
      libelle: "ACHAT ACCESSOIRES FALCOM"
    },
    {
      id: 6017,
    libelle: "ACHAT M'SES FALCOM"
    },
    {
      id: 60180100,
      libelle: "ACHAT HOWEN"
    },
    {
      id: 6018,
    libelle: "ACHAT M'SES HOWEN"
    },
    {
      id: 60190000,
      libelle: "Rabais, Remises et Ristournes obten"
    },
    {
      id: 601,
   libelle: "ACHATS DE MARCHANDISES"
    },
    {
      id: 60210000,
      libelle: "dans la Région"
    },
    {
      id: 60211000,
      libelle: "Frais de communication Orange"
    },
    {
      id: 60212000,
      libelle: "Frais de communication MTN"
    },
    {
      id: 60213000,
      libelle: "Frais de télécommunictions LMT GROU"
    },
    {
      id: 60214000,
      libelle: "Autres frais de télécommunications"
    },
    {
      id: 60220000,
      libelle: "hors Région"
    },
    {
      id: 60221000,
      libelle: "Frais de communication GURTAM"
    },
    {
      id: 60223000,
      libelle: "Frais de communication SCOPE ETRAN"
    },
    {
      id: 60226000,
      libelle: "Frais de télécommunications INFOBIP"
    },
    {
      id: 60230000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 60240000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 60290000,
      libelle: "Rabais, Remises et Ristournes obten"
    },
    {
      id: 60310000,
      libelle: "VARIAT° DE STOCKS DE MARCHANDISES"
    },
    {
      id: 60310100,
      libelle: "Variations des stocks de MHUB 801"
    },
    {
      id: 60310200,
      libelle: "Variations des stocks de MHUB 918"
    },
    {
      id: 60310300,
      libelle: "Variations des stocks de MHUB 828"
    },
    {
      id: 60310400,
      libelle: "Variations des stocks de MHUB 701"
    },
    {
      id: 60310500,
      libelle: "Variations des stocks de MHUB 918H"
    },
    {
      id: 60310600,
      libelle: "Variations des stocks MHUB 855"
    },
    {
      id: 60310700,
      libelle: "Variations des stocks MHUB 855H"
    },
    {
      id: 60310800,
      libelle: "Variations des stocks MHUB 846"
    },
    {
      id: 60310900,
      libelle: "VARIATION STOCK MHUB 837"
    },
    {
      id: 60311000,
      libelle: "Variations des stocks de Accesoire"
    },
    {
      id: 60312000,
      libelle: "Variations des stocks autres March"
    },
    {
      id: 60313000,
      libelle: "Variations des stocks TELTONIKA"
    },
    {
      id: 60314000,
      libelle: "Variations des stocks BCE"
    },
    {
      id: 60315000,
      libelle: "Variations des stocks ATRACK"
    },
    {
      id: 60316000,
      libelle: "Variations des stocks SQUARELL"
    },
    {
      id: 60317000,
      libelle: "Variations des stocks FALCOM"
    },
    {
      id: 60318000,
      libelle: "Variation stocks HOWEN"
    },
    {
      id: 60319000,
      libelle: "VARIATIONS DE STOCKS STREAMAX"
    },
    {
      id: 60330000,
      libelle: "Variations des stocks d'autres appr"
    },
    {
      id: 603,
   libelle: "VARIATION DES STOCKS DE BIENS ACHE"
    },
    {
      id: 60410000,
      libelle: "Achats matières consommables"
    },
    {
      id: 60415000,
      libelle: "Achats fournitures informatiques"
    },
    {
      id: 60420000,
      libelle: "Achats carburants"
    },
    {
      id: 60430000,
      libelle: "Achats produits d'entretien"
    },
    {
      id: 60440000,
      libelle: "Fournitures d'atelier et d'usine"
    },
    {
      id: 60441000,
      libelle: "Achat fourn install Telecom"
    },
    {
      id: 60450000,
      libelle: "Achats Fournitures Informatiques"
    },
    {
      id: 60460000,
      libelle: "Fournitures de magasin"
    },
    {
      id: 60470000,
      libelle: "Achats fournitures de bureau"
    },
    {
      id: 60490000,
      libelle: "Rabais, Remises et Ristournes obten"
    },
    {
      id: 604,
   libelle: "ACHATS MAT.&FOURN. CONSOMMABLES"
    },
    {
      id: 60510000,
      libelle: "Achats Fournitures non stock eau"
    },
    {
      id: 60520000,
      libelle: "Achats Fournitures non stock electr"
    },
    {
      id: 60530000,
      libelle: "Fournitures non stockables – Autres"
    },
    {
      id: 60531000,
      libelle: "Achat Carburant"
    },
    {
      id: 60532000,
      libelle: "Consommation MTN BRONZE"
    },
    {
      id: 60540000,
      libelle: "Fournitures d'entretien non stockab"
    },
    {
      id: 60550000,
      libelle: "Fournitures de bureau non stockable"
    },
    {
      id: 60560000,
      libelle: "Achats de petit matériel et outilla"
    },
    {
      id: 60560100,
      libelle: "Achats Relais"
    },
    {
      id: 60560200,
      libelle: "Achats Cosses"
    },
    {
      id: 60560300,
      libelle: "Achats tubes silicones"
    },
    {
      id: 60560400,
      libelle: "Achats Collier COLSON"
    },
    {
      id: 60560500,
      libelle: "Achats Cables"
    },
    {
      id: 60560600,
      libelle: "ACHATS AUTRES MATERIELS POUR INSTAL"
    },
    {
      id: 60570000,
      libelle: "Achat pièces rechanges véhicules"
    },
    {
      id: 60571000,
      libelle: "Achat d'études et Prestations"
    },
    {
      id: 60580000,
      libelle: "Achat petits matériels et outillage"
    },
    {
      id: 60590000,
      libelle: "Rabais, Remises et Ristournes obten"
    },
    {
      id: 60590100,
      libelle: "Vêtement de travail"
    },
    {
      id: 60592000,
      libelle: "Médicament et fourniture au personn"
    },
    {
      id: 605,
   libelle: "AUTRES ACHATS"
    },
    {
      id: 60810000,
      libelle: "Emballages perdus"
    },
    {
      id: 60820000,
      libelle: "Emballages récupérables non identif"
    },
    {
      id: 60830000,
      libelle: "Emballages à usage mixte"
    },
    {
      id: 60890000,
      libelle: "Rabais, Remises et Ristournes obten"
    },
    {
      id: 61100000,
      libelle: "Transports sur achats"
    },
    {
      id: 61200000,
      libelle: "Transports sur Ventes"
    },
    {
      id: 61300000,
      libelle: "TRANSPORTS POUR LE COMPTE DE TIERS"
    },
    {
      id: 61400000,
      libelle: "Transports du personnel"
    },
    {
      id: 61600000,
      libelle: "Transports de plis"
    },
    {
      id: 61700000,
      libelle: "Transport aérien-déplacement"
    },
    {
      id: 61710000,
      libelle: "Transport terrestre-déplacement"
    },
    {
      id: 61720000,
      libelle: "Indemnités kilométriques"
    },
    {
      id: 61800000,
      libelle: "Taxi"
    },
    {
      id: 61810000,
      libelle: "Voyages et Deplacements"
    },
    {
      id: 61811000,
      libelle: "Voyages et déplacements Nigéria"
    },
    {
      id: 61812000,
      libelle: "Voyage et déplacement Maurice"
    },
    {
      id: 61830000,
      libelle: "Transports administratifs"
    },
    {
      id: 61831000,
      libelle: "Taxi"
    },
    {
      id: 61840000,
      libelle: "Transport terrrestre-deplacement"
    },
    {
      id: 61850000,
      libelle: "Indemnités Kilométriques"
    },
    {
      id: 61,
  libelle: "TRANSPORTS"
    },
    {
      id: 62100000,
      libelle: "SOUS-TRAITANCE GÉNÉRALE"
    },
    {
      id: 62210000,
      libelle: "Locations de terrains"
    },
    {
      id: 62220000,
      libelle: "Locations de bâtiments"
    },
    {
      id: 62230000,
      libelle: "Locations de Matériels"
    },
    {
      id: 62240000,
      libelle: "Malis sur emballages"
    },
    {
      id: 62250000,
      libelle: "Locations d'emballages"
    },
    {
      id: 62280000,
      libelle: "Locations Diverses"
    },
    {
      id: 622,
   libelle: "LOCATIONS ET CHARGES LOCATIVES"
    },
    {
      id: 62320000,
      libelle: "Crédit-bail immobilier"
    },
    {
      id: 62330000,
      libelle: "Redevance Crédit Bail"
    },
    {
      id: 62340000,
      libelle: "Location vente"
    },
    {
      id: 62410000,
      libelle: "Entretien et réparations des biens"
    },
    {
      id: 62410100,
      libelle: "Entretien Batiments"
    },
    {
      id: 62420100,
      libelle: "Entretien Véhicules"
    },
    {
      id: 62420200,
      libelle: "Entretien Matériels"
    },
    {
      id: 62430000,
      libelle: "Maintenance"
    },
    {
      id: 62480000,
      libelle: "Autres entretiens et réparations"
    },
    {
      id: 624,
   libelle: "ENTRETIEN, REPARATIONS ET MAINTENA"
    },
    {
      id: 62510000,
      libelle: "Assurances Multirisques"
    },
    {
      id: 62520000,
      libelle: "Assurances Automobile"
    },
    {
      id: 62530000,
      libelle: "Assurances responsabilité civile"
    },
    {
      id: 62540000,
      libelle: "Assurances responsabilité du produc"
    },
    {
      id: 62550000,
      libelle: "Assurances insolvabilité clients"
    },
    {
      id: 62560000,
      libelle: "Assurances transport sur achats"
    },
    {
      id: 62570000,
      libelle: "Assurances transport sur ventes"
    },
    {
      id: 62581000,
      libelle: "Assurances indiv. Accident Particu"
    },
    {
      id: 62582000,
      libelle: "Assurances maladies"
    },
    {
      id: 62588000,
      libelle: "Autres primes d'assurances"
    },
    {
      id: 625,
   libelle: "PRIMES D'ASSURANCE"
    },
    {
      id: 62610000,
      libelle: "Études et recherches"
    },
    {
      id: 62650000,
      libelle: "Documentation générale"
    },
    {
      id: 62660000,
      libelle: "Documentation Technique"
    },
    {
      id: 626,
   libelle: "ETUDES, RECHERCHES ET DOCUMENTATIO"
    },
    {
      id: 62710000,
      libelle: "Annonces, insertions"
    },
    {
      id: 62720000,
      libelle: "Caralogues, imprimés publicitaires"
    },
    {
      id: 62730000,
      libelle: "Échantillons"
    },
    {
      id: 62740000,
      libelle: "Foires et expositions"
    },
    {
      id: 62750000,
      libelle: "Publications"
    },
    {
      id: 62760000,
      libelle: "Cadeaux à la clientèle"
    },
    {
      id: 62770000,
      libelle: "Frais de colloques, séminaires, con"
    },
    {
      id: 62780000,
      libelle: "Publicité et relations publiques"
    },
    {
      id: 627,
   libelle: "PUBLICITE, PUBLICAT°, RELAT° PUBLI"
    },
    {
      id: 62810000,
      libelle: "Frais de téléphone"
    },
    {
      id: 62811000,
      libelle: "Frais Cartes Téléphoniques"
    },
    {
      id: 62812000,
      libelle: "Frais Téléphone CAMTEL"
    },
    {
      id: 62813000,
      libelle: "Frais Téléphone MTN"
    },
    {
      id: 62814000,
      libelle: "Frais connection Internet"
    },
    {
      id: 62815000,
      libelle: "FRAIS TELEPHONE ORANGE"
    },
    {
      id: 62816000,
      libelle: "FRAIS DE CONNEXION INTERNET CAMTEL"
    },
    {
      id: 62820000,
      libelle: "Frais de télex"
    },
    {
      id: 62821000,
      libelle: "Frais de photocopie"
    },
    {
      id: 62830000,
      libelle: "Frais de télécopie"
    },
    {
      id: 62861100,
      libelle: "SCOPE Vermeil"
    },
    {
      id: 62861200,
      libelle: "SCOPE Bronze"
    },
    {
      id: 62861300,
      libelle: "SCOPE Silver"
    },
    {
      id: 62861400,
      libelle: "SCOPE Gold"
    },
    {
      id: 62862000,
      libelle: "Frais de communication GILAT"
    },
    {
      id: 62863000,
      libelle: "Frais de communication MTN"
    },
    {
      id: 62863100,
      libelle: "MTN Vermeil"
    },
    {
      id: 62863200,
      libelle: "MTN Bronze"
    },
    {
      id: 62863300,
      libelle: "MTN Silver"
    },
    {
      id: 62863400,
      libelle: "MTN Gold"
    },
    {
      id: 62864000,
      libelle: "FRAIS DE COMMUNICATION ORANGE"
    },
    {
      id: 62865000,
      libelle: "FRAIS DE COMMUNICATION GURTAM"
    },
    {
      id: 62866000,
      libelle: "FRAIS DE COMMUNICATION HOWEN"
    },
    {
      id: 62867000,
      libelle: "FRAIS DE COMMUNICATION ATRACK"
    },
    {
      id: 62868000,
      libelle: "FRAIS DE COMMUNICATION BCE"
    },
    {
      id: 62869000,
      libelle: "FRAIS DE COMMUNICATION SQUARELL"
    },
    {
      id: 62870000,
      libelle: "FRAIS DE COMMUNICATION BE-MOBILE"
    },
    {
      id: 62880000,
      libelle: "Autres frais de télécommunications"
    },
    {
      id: 62881000,
      libelle: "Frais de communication SCOPE LOCAL"
    },
    {
      id: 62881100,
      libelle: "Frais de communication SCOPE ETRANG"
    },
    {
      id: 62882000,
      libelle: "FRAIS DE TELECOMMUNICATION ORANGE S"
    },
    {
      id: 62883000,
      libelle: "Frais de communication MTN"
    },
    {
      id: 62884000,
      libelle: "FRAIS DE COMMUNICATION ORANGE"
    },
    {
      id: 62884100,
      libelle: "FRAIS DE TELECOMMUNICATION ORANGE M"
    },
    {
      id: 62885000,
      libelle: "FRAIS DE COMMUNICATION GURTAM"
    },
    {
      id: 62886000,
      libelle: "FRAIS DE COMMUNICATION HOWEN"
    },
    {
      id: 62887000,
      libelle: "FRAIS DE TELECOMMUNICATION SECURIS"
    },
    {
      id: 62888000,
      libelle: "FRAIS DE COMMUNICATION BCE"
    },
    {
      id: 62889000,
      libelle: "FRAIS DE COMMUNICATION BE-MOBILE"
    },
    {
      id: 62889100,
      libelle: "FRAIS DE TELECOMMUNICATION INFOBIP"
    },
    {
      id: 62889200,
      libelle: "FRAIS DE TELECOMMUNICATIONS LMT GRO"
    },
    {
      id: 628,
   libelle: "FRAIS DE TELECOMMUNICATION"
    },
    {
      id: 62,
  libelle: "SERVICES EXTERIEURS A"
    },
    {
      id: 63110000,
      libelle: "Frais sur titres (achat, vente, gar"
    },
    {
      id: 63120000,
      libelle: "Frais sur effets"
    },
    {
      id: 63130000,
      libelle: "Location de coffres"
    },
    {
      id: 63140000,
      libelle: "Commissions d'affacturage"
    },
    {
      id: 63150000,
      libelle: "Commissions sur cartes de crédit"
    },
    {
      id: 63160000,
      libelle: "Frais d'émission d'emprunts"
    },
    {
      id: 63171000,
      libelle: "Frais Bancaires BICEC"
    },
    {
      id: 63171100,
      libelle: "Frais affacturage BICEC 4"
    },
    {
      id: 63171200,
      libelle: "Frais Bancaires AFRILAND"
    },
    {
      id: 63171300,
      libelle: "FRAIS ORANGE MONEY"
    },
    {
      id: 63172000,
      libelle: "Frais Bancaires CBC"
    },
    {
      id: 63173000,
      libelle: "Frais bancaires BNP"
    },
    {
      id: 63174000,
      libelle: "Frais bancaire AFI"
    },
    {
      id: 63175000,
      libelle: "Frais bancaire BGFI"
    },
    {
      id: 63176000,
      libelle: "Frais Bancaires SGBC"
    },
    {
      id: 63177000,
      libelle: "Frais Bancaires SGC"
    },
    {
      id: 63178000,
      libelle: "Frais Bancaires BC-PME"
    },
    {
      id: 63179000,
      libelle: "Frais bancaires UBA"
    },
    {
      id: 63180000,
      libelle: "Autres frais bancaires"
    },
    {
      id: 63181000,
      libelle: "Frais Bancaires BICEC"
    },
    {
      id: 63181100,
      libelle: "Frais affactuage BICEC 4"
    },
    {
      id: 63181200,
      libelle: "FRAIS BANCAIRES AFRILAND"
    },
    {
      id: 63181300,
      libelle: "Frais bancaires ECOBANK"
    },
    {
      id: 63181400,
      libelle: "Frais orange money"
    },
    {
      id: 63182000,
      libelle: "Frais Bancaires CBC"
    },
    {
      id: 63183000,
      libelle: "Frais Bancaires BNP"
    },
    {
      id: 63185000,
      libelle: "Frais Bancaires BGFI"
    },
    {
      id: 63186000,
      libelle: "FRAIS BANCAIRE SGC"
    },
    {
      id: 63188000,
      libelle: "Frais sur instruments monnaie elect"
    },
    {
      id: 63188100,
      libelle: "Frais transfert H/banques"
    },
    {
      id: 63188200,
      libelle: "Frais / Crédit bail"
    },
    {
      id: 63189000,
      libelle: "FRAIS BANCAIRES UBA"
    },
    {
      id: 631,
   libelle: "FRAIS BANCAIRES"
    },
    {
      id: 63220000,
      libelle: "Commissions sur ventes"
    },
    {
      id: 63221000,
      libelle: "COMMISSIONS SUR VENTE BICEC"
    },
    {
      id: 63230000,
      libelle: "Rémunérations des transitaires"
    },
    {
      id: 63240000,
      libelle: "Honoraires et professions reglement"
    },
    {
      id: 63240100,
      libelle: "Honoraires Comptables"
    },
    {
      id: 63240200,
      libelle: "Honoraires Juridiques"
    },
    {
      id: 63240300,
      libelle: "Autres honoraires"
    },
    {
      id: 63250000,
      libelle: "Frais d'actes et de contentieux"
    },
    {
      id: 63260000,
      libelle: "Frais de gardiennage"
    },
    {
      id: 63270000,
      libelle: "Frais de transfert H/Banque"
    },
    {
      id: 63271000,
      libelle: "REMUNERATION DES TRANSITAIRES"
    },
    {
      id: 63280000,
      libelle: "Divers frais"
    },
    {
      id: 63281000,
      libelle: "Frais de gardiennage"
    },
    {
      id: 632,
   libelle: "REMUNERATION INTERMEDIAIRE ET CONSE"
    },
    {
      id: 63300000,
      libelle: "frais de formation du personnel"
    },
    {
      id: 633,
   libelle: "FRAIS DE FORMAT° DU PERSONNEL"
    },
    {
      id: 63420000,
      libelle: "Redevances pour brevets, licences"
    },
    {
      id: 63430000,
      libelle: "Redevances pour logiciels"
    },
    {
      id: 63440000,
      libelle: "Redevances pour marques"
    },
    {
      id: 63510000,
      libelle: "Cotisations"
    },
    {
      id: 63580000,
      libelle: "Concours divers"
    },
    {
      id: 63710000,
      libelle: "Personnel intérimaire"
    },
    {
      id: 63720000,
      libelle: "Personnel détaché ou prêté à l'enti"
    },
    {
      id: 63810000,
      libelle: "Frais de recrutement du personnel"
    },
    {
      id: 63820000,
      libelle: "Frais de déménagement"
    },
    {
      id: 63830000,
      libelle: "Réceptions"
    },
    {
      id: 63840000,
      libelle: "Missions"
    },
    {
      id: 63841000,
      libelle: "Mission Nigeria"
    },
    {
      id: 63842000,
      libelle: "Missions Maurice"
    },
    {
      id: 63845000,
      libelle: "Hebergement"
    },
    {
      id: 63850000,
      libelle: "Hébergement"
    },
    {
      id: 638,
   libelle: "AUTRES CHARGES EXTERNES"
    },
    {
      id: 63,
  libelle: "SERVICES EXTERIEURS B"
    },
    {
      id: 64110000,
      libelle: "Impôts fonciers et taxes annexes"
    },
    {
      id: 64120000,
      libelle: "Patentes, licences et taxes annexe"
    },
    {
      id: 64130000,
      libelle: "Taxes sur appointements et salaires"
    },
    {
      id: 64140000,
      libelle: "Taxes d'apprentissage"
    },
    {
      id: 64150000,
      libelle: "Formation professionnelle continue"
    },
    {
      id: 64180000,
      libelle: "Péage"
    },
    {
      id: 64181000,
      libelle: "IRCM"
    },
    {
      id: 64182000,
      libelle: "TPRCM"
    },
    {
      id: 641,
   libelle: "IMPOTS ET TAXES DIRECTS"
    },
    {
      id: 64500000,
      libelle: "Impôt et Taxes Indirectes"
    },
    {
      id: 64580100,
      libelle: "Crédit Foncier"
    },
    {
      id: 64580200,
      libelle: "Fond National de l'Emploi"
    },
    {
      id: 645,
   libelle: "IMPOTS ET TAXES INDIRECT"
    },
    {
      id: 64610000,
      libelle: "Droit de mutation"
    },
    {
      id: 64620000,
      libelle: "Timbres Fiscaux"
    },
    {
      id: 64630000,
      libelle: "Taxes sur les véhicules de société"
    },
    {
      id: 64640000,
      libelle: "Vignettes"
    },
    {
      id: 64650000,
      libelle: "Péage"
    },
    {
      id: 64660000,
      libelle: "Timbres Fiscaux"
    },
    {
      id: 64680000,
      libelle: "Autres droits"
    },
    {
      id: 646,
   libelle: "DROITS D'ENREGISTREMENT"
    },
    {
      id: 64710000,
      libelle: "Pénalités d'assiette, impôts direct"
    },
    {
      id: 64720000,
      libelle: "Pénalités d'assiette, impôts indire"
    },
    {
      id: 64730000,
      libelle: "Pénalités de recouvrement, impôts d"
    },
    {
      id: 64740000,
      libelle: "Pénalités de recouvrement, impôts i"
    },
    {
      id: 64780000,
      libelle: "Autres amendes pénales et fiscales"
    },
    {
      id: 647,
   libelle: "PENALITES ET AMENDES FISCALES"
    },
    {
      id: 64800000,
      libelle: "TAXE SPECIALE SUR LE REVENU"
    },
    {
      id: 64,
  libelle: "IMPOTS ET TAXES"
    },
    {
      id: 65110000,
      libelle: "Perte sur clients"
    },
    {
      id: 65140000,
      libelle: "Perte sur stocks"
    },
    {
      id: 65150000,
      libelle: "Autres débiteurs"
    },
    {
      id: 651,
   libelle: "PERTE SUR CREANCES ET DEBITEURS"
    },
    {
      id: 65210000,
      libelle: "Quote-part transférée de bénéfices"
    },
    {
      id: 65250000,
      libelle: "Pertes imputées par transfert (comp"
    },
    {
      id: 65400000,
      libelle: "VALEUR COMPTABLE DES CESSIONS COURA"
    },
    {
      id: 65800000,
      libelle: "Charges de gestion courante"
    },
    {
      id: 65810000,
      libelle: "Dons"
    },
    {
      id: 65820000,
      libelle: "Pourboires"
    },
    {
      id: 65821000,
      libelle: "Pourboires"
    },
    {
      id: 65830000,
      libelle: "Mécénat"
    },
    {
      id: 65880000,
      libelle: "Autres charges diverses"
    },
    {
      id: 65882000,
      libelle: "Charges Maurice"
    },
    {
      id: 65883000,
      libelle: "Charges liées Nigeria"
    },
    {
      id: 65884000,
      libelle: "Charges liées MINTRANS"
    },
    {
      id: 65885000,
      libelle: "Charges caisse/achat à repartir"
    },
    {
      id: 658,
   libelle: "CHARGES DIVERSES"
    },
    {
      id: 65910000,
      libelle: "sur risques à court terme"
    },
    {
      id: 65930000,
      libelle: "Charges Provisionnes sur stocks"
    },
    {
      id: 65940000,
      libelle: "Charges provisionnees sur Créances"
    },
    {
      id: 65941000,
      libelle: "Compte à créer"
    },
    {
      id: 65980000,
      libelle: "Autres charges provisionnees"
    },
    {
      id: 659,
   libelle: "CHARGES PROVISIONNEES D'EXPL"
    },
    {
      id: 65,
  libelle: "AUTRES CHARGES"
    },
    {
      id: 66110000,
      libelle: "Appointements salaires et commissi"
    },
    {
      id: 66111000,
      libelle: "Arrondie en cours , avances sur sal"
    },
    {
      id: 66111100,
      libelle: "Heures supplémentaires 120%"
    },
    {
      id: 66111200,
      libelle: "Heures supplémentaires 130%"
    },
    {
      id: 66111300,
      libelle: "Heures supplémentaires 140%"
    },
    {
      id: 66111400,
      libelle: "Heures supplémentaires 150%"
    },
    {
      id: 66111500,
      libelle: "Heures supplémentaires 200%"
    },
    {
      id: 66120000,
      libelle: "Primes d'ancienneté"
    },
    {
      id: 66122000,
      libelle: "Gratifications"
    },
    {
      id: 66130000,
      libelle: "Congés payés"
    },
    {
      id: 66131000,
      libelle: "Congés supplementaires"
    },
    {
      id: 66132000,
      libelle: "Forfait HS"
    },
    {
      id: 66140000,
      libelle: "Indem préavis et licencement"
    },
    {
      id: 66150000,
      libelle: "Gratifications"
    },
    {
      id: 66160000,
      libelle: "PRIME DE BILAN"
    },
    {
      id: 66170000,
      libelle: "Avantages en nature"
    },
    {
      id: 66180000,
      libelle: "Autres remunérations directes"
    },
    {
      id: 661,
   libelle: "REM. DIRECTE PERSONNEL NATIONAL"
    },
    {
      id: 66210000,
      libelle: "Appointements, salaires et commissi"
    },
    {
      id: 66220000,
      libelle: "Primes et gratifications"
    },
    {
      id: 66230000,
      libelle: "Congés payés"
    },
    {
      id: 66240000,
      libelle: "Indemnités de préavis, de licenciem"
    },
    {
      id: 66250000,
      libelle: "Indemnités de maladie versées aux t"
    },
    {
      id: 66260000,
      libelle: "Supplément familial"
    },
    {
      id: 66270000,
      libelle: "Avantages en nature"
    },
    {
      id: 66280000,
      libelle: "Autres rémunérations directes"
    },
    {
      id: 662,
   libelle: "REM. DIRECTE PERSONNEL NON NATIONAL"
    },
    {
      id: 66310000,
      libelle: "Indemnités de logement"
    },
    {
      id: 66320000,
      libelle: "Indemnités de représentation"
    },
    {
      id: 66330000,
      libelle: "Indemnités d'expatriation"
    },
    {
      id: 66330200,
      libelle: "Indemnité de transport et déplacem"
    },
    {
      id: 66380000,
      libelle: "Autres indemnités et avantages dive"
    },
    {
      id: 663,
   libelle: "INDEM. FORFAITAIRES VERSES AU PERS"
    },
    {
      id: 66410000,
      libelle: "CNPS Patronal"
    },
    {
      id: 66420000,
      libelle: "Charges sociales sur rémunération d"
    },
    {
      id: 664,
   libelle: "CHARGES SOCIALES"
    },
    {
      id: 66610000,
      libelle: "Rémunération du travail de l'exploi"
    },
    {
      id: 66620000,
      libelle: "Charges sociales"
    },
    {
      id: 66710000,
      libelle: "Primes de stage"
    },
    {
      id: 66720000,
      libelle: "Personnel détaché ou prêté à l’entr"
    },
    {
      id: 66810000,
      libelle: "Versements aux Syndicats et Comités"
    },
    {
      id: 66820000,
      libelle: "Versements aux Comités d'hygiène et"
    },
    {
      id: 66830000,
      libelle: "Autres oeuvres sociales"
    },
    {
      id: 66840000,
      libelle: "MEDECINE DU TRAVAIL ET PHARMACIE"
    },
    {
      id: 66860000,
      libelle: "ASSURANCES RETRAITE ET FONDS DE PEN"
    },
    {
      id: 66870000,
      libelle: "Majorations et pénalités sociales"
    },
    {
      id: 66,
  libelle: "CHARGES DE PERSONNEL"
    },
    {
      id: 67110000,
      libelle: "Emprunts obligataires"
    },
    {
      id: 67120000,
      libelle: "Intérêts des emprunts auprès des ét"
    },
    {
      id: 67130000,
      libelle: "Dettes liées à des participations"
    },
    {
      id: 67220000,
      libelle: "Intérêts dans loyers de location ac"
    },
    {
      id: 67230000,
      libelle: "Intérêts dans loyers de location ac"
    },
    {
      id: 67280000,
      libelle: "Intérêts dans loyers des autresloca"
    },
    {
      id: 67300000,
      libelle: "Esomptes accordés"
    },
    {
      id: 673,
   libelle: "ESCOMPTES ACCORDES"
    },
    {
      id: 67410000,
      libelle: "Avances reçues et dépôts créditeurs"
    },
    {
      id: 67420000,
      libelle: "Comptes courants bloqués"
    },
    {
      id: 67430000,
      libelle: "Intérêts sur obligations cautionnée"
    },
    {
      id: 67440000,
      libelle: "Interêts sur dettes commerciales"
    },
    {
      id: 67450000,
      libelle: "Interêts bancaires sur opé de trés"
    },
    {
      id: 67480000,
      libelle: "Intérêts sur dettes diverses"
    },
    {
      id: 674,
   libelle: "AUTRES INTERETS"
    },
    {
      id: 67500000,
      libelle: "ESCOMPTES DES EFFETS DE COMMERCE"
    },
    {
      id: 67600000,
      libelle: "PERTES DE CHANGE"
    },
    {
      id: 67700000,
      libelle: "PERTES SUR CESSIONS DE TITRES DE PL"
    },
    {
      id: 67810000,
      libelle: "sur rentes viagères"
    },
    {
      id: 67820000,
      libelle: "sur opérations financières"
    },
    {
      id: 67840000,
      libelle: "sur instruments de trésorerie"
    },
    {
      id: 67910000,
      libelle: "sur risques financiers"
    },
    {
      id: 67950000,
      libelle: "sur titres de placement"
    },
    {
      id: 67980000,
      libelle: "Autres charges provisionnées financ"
    },
    {
      id: 67,
  libelle: "FRAIS FINANCIERS ET CHARGES ASSIMI"
    },
    {
      id: 68121000,
      libelle: "DOT/AMORT Marques"
    },
    {
      id: 68122000,
      libelle: "DOT/AMORT Logiciels"
    },
    {
      id: 68130000,
      libelle: "Dotations aux amortissements des im"
    },
    {
      id: 68131000,
      libelle: "DOT/AMORT Agencements et install"
    },
    {
      id: 68132100,
      libelle: "DOT/AMORT Matériels de Bureau"
    },
    {
      id: 68132200,
      libelle: "DOT/AMORT Mobilier de bureau"
    },
    {
      id: 68133000,
      libelle: "DOT/AMORT Matériels informatiques"
    },
    {
      id: 68134000,
      libelle: "DOT/AMORT Matériels et outillages"
    },
    {
      id: 68135000,
      libelle: "DOT/AMORT Matériels de Transport"
    },
    {
      id: 69110000,
      libelle: "pour risques et charges"
    },
    {
      id: 69130000,
      libelle: "pour dépréciation des immobilisatio"
    },
    {
      id: 69140000,
      libelle: "pour dépréciation des immobilisatio"
    },
    {
      id: 69710000,
      libelle: "pour risques et charges"
    },
    {
      id: 69720000,
      libelle: "pour dépréciation des immobilisatio"
    },
    {
      id: 6,
     libelle: "TOTAL CLASSE 6"
    },
    {
      id: 70110100,
      libelle: "Ventes Surveyor vermeil"
    },
    {
      id: 70110101,
      libelle: "Vente Kit Vermeil-1100"
    },
    {
      id: 70110102,
      libelle: "Vente Kit Vermeil-1200"
    },
    {
      id: 70110103,
      libelle: "Vente Kit Vermeil-1202"
    },
    {
      id: 70110104,
      libelle: "Vente Kit Vermeil-4200"
    },
    {
      id: 70110105,
      libelle: "Vente Kit Vermeil-5300"
    },
    {
      id: 70110106,
      libelle: "Vente Kit Vermeil-1100 Dual SIM"
    },
    {
      id: 70110107,
      libelle: "Vente Kit Vermeil-5500"
    },
    {
      id: 70110108,
      libelle: "Vente kit vermeil 5500 Dual Sim"
    },
    {
      id: 70110109,
      libelle: "Vente Kit-Atrack"
    },
    {
      id: 70110110,
      libelle: "Frais d'installation vermeil"
    },
    {
      id: 70110200,
      libelle: "Ventes Surveyor bronze"
    },
    {
      id: 70110201,
      libelle: "Kit Bronze-837"
    },
    {
      id: 70110202,
      libelle: "Kit Bronze-846"
    },
    {
      id: 70110203,
      libelle: "Kit Bronze-855"
    },
    {
      id: 70110204,
      libelle: "Kit Gold-855H"
    },
    {
      id: 70110205,
      libelle: "Kit Bronze-Galiléo"
    },
    {
      id: 70110210,
      libelle: "Frais d'installation Bronze"
    },
    {
      id: 70110300,
      libelle: "Ventes Surveyor silver"
    },
    {
      id: 70110310,
      libelle: "Frais d'installation Silver"
    },
    {
      id: 70110400,
      libelle: "Ventes Surveyor gold"
    },
    {
      id: 70110410,
      libelle: "Frais d'installation Gold"
    },
    {
      id: 70110500,
      libelle: "Ventes BOFAN PT300"
    },
    {
      id: 70110600,
      libelle: "Ventes BOFAN autres Produits"
    },
    {
      id: 70110700,
      libelle: "VENTE CONTROLE D'ACCES"
    },
    {
      id: 70110800,
      libelle: "VENTE CAMERAS"
    },
    {
      id: 70110900,
      libelle: "LECTEUR ANTI-PASSE BACK"
    },
    {
      id: 70111000,
      libelle: "Ventes Accessoires"
    },
    {
      id: 70111100,
      libelle: "VENTOUSE MAGNETIQUE"
    },
    {
      id: 70111300,
      libelle: "CARTE DE PROXIMITE"
    },
    {
      id: 70111400,
      libelle: "FRAIS D'INSTALLATION DU SYSTEME DE"
    },
    {
      id: 70111500,
      libelle: "Contrôle d'acces"
    },
    {
      id: 70112000,
      libelle: "Ventes Eagle"
    },
    {
      id: 70113000,
      libelle: "KIT MTN TRACKING PLUS"
    },
    {
      id: 70119900,
      libelle: "Ventes diverses"
    },
    {
      id: 70119990,
      libelle: "VENTES EXONEREES"
    },
    {
      id: 7011,
    libelle: "VENTES LOCALES"
    },
    {
      id: 70120000,
      libelle: "hors Région"
    },
    {
      id: 70120100,
      libelle: "Ventes Export Surveyor Bronze"
    },
    {
      id: 70120110,
      libelle: "Frais d'installation Bronze Ex."
    },
    {
      id: 70120200,
      libelle: "KIT SURVEYOR VERMEIL Ex."
    },
    {
      id: 70120210,
      libelle: "Frais d'installation vermeil Ex."
    },
    {
      id: 70120300,
      libelle: "KIT SURVEYOR GOLD Ex."
    },
    {
      id: 70120310,
      libelle: "Frais d'installation Gold Ex."
    },
    {
      id: 70120400,
      libelle: "Ventes Export Surveyor Gold"
    },
    {
      id: 7012,
    libelle: "VENTES A L'INTERNATIONAL"
    },
    {
      id: 70130000,
      libelle: "Vente cameras à l'international"
    },
    {
      id: 70131000,
      libelle: "Vente Cameras Local"
    },
    {
      id: 70140000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 701,
   libelle: "VENTES DE MARCHANDISES"
    },
    {
      id: 70210000,
      libelle: "dans la Région"
    },
    {
      id: 70220000,
      libelle: "hors Région"
    },
    {
      id: 70230000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 70240000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 70310000,
      libelle: "dans la Région"
    },
    {
      id: 70320000,
      libelle: "hors Région"
    },
    {
      id: 70330000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 70340000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 70410000,
      libelle: "dans la Région"
    },
    {
      id: 70420000,
      libelle: "hors Région"
    },
    {
      id: 70430000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 70440000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 70510000,
      libelle: "dans la Région"
    },
    {
      id: 70520000,
      libelle: "hors Région"
    },
    {
      id: 70530000,
      libelle: "aux entreprises du groupe dans la R"
    },
    {
      id: 70540000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 70610000,
      libelle: "Monitoring Surveyor bronze"
    },
    {
      id: 70610100,
      libelle: "Monitoring Surveyor vermeil"
    },
    {
      id: 70610200,
      libelle: "Monitoring Surveyor bronze"
    },
    {
      id: 70610300,
      libelle: "Monitoring Surveyor silver"
    },
    {
      id: 70610400,
      libelle: "Monitoring Surveyor gold"
    },
    {
      id: 70610500,
      libelle: "Monitoring Produits BOFAN"
    },
    {
      id: 70610700,
      libelle: "MONITORING SURVEYOR BRONZE AVEC GES"
    },
    {
      id: 70611000,
      libelle: "Monitoring surveyor Bronze"
    },
    {
      id: 70612000,
      libelle: "Monitoring EAGLE"
    },
    {
      id: 70619700,
      libelle: "Frais de communication"
    },
    {
      id: 70619800,
      libelle: "Prestations diverses"
    },
    {
      id: 70619900,
      libelle: "Monitoring diverses"
    },
    {
      id: 70619980,
      libelle: "MONINTORING ALARME"
    },
    {
      id: 70619990,
      libelle: "PRESTATIONS EXONEREES"
    },
    {
      id: 7061",
    libelle: "MONITORING LOCALE"
    },
    {
      id: 70620200,
      libelle: "Monitoring Export Surveyor Bronze"
    },
    {
      id: 70620300,
      libelle: "MONITORING SURVEYOR VERMEIL Ex."
    },
    {
      id: 70620400,
      libelle: "Monitoring Export Surveyor Gold"
    },
    {
      id: 70620500,
      libelle: "Monitoring Divers International"
    },
    {
      id: 70620600,
      libelle: "Prestations diverses à l Internatio"
    },
    {
      id: 7062,
    libelle: "MONITORING A L'INTERNATIONAL"
    },
    {
      id: 70630000,
      libelle: "MONITORING CAMERAS"
    },
    {
      id: 70631000,
      libelle: "MONITORING CAMERAS LOCAL"
    },
    {
      id: 7063,
    libelle: "MONITORING CAMERAS"
    },
    {
      id: 70640000,
      libelle: "aux entreprises du groupe hors Régi"
    },
    {
      id: 706",
   libelle: "SERVICES VENDUS"
    },
    {
      id: 70710000,
      libelle: "Ports, emballages perdus et autres"
    },
    {
      id: 70720000,
      libelle: "Commissions et courtages"
    },
    {
      id: 70730000,
      libelle: "Locations"
    },
    {
      id: 70731000,
      libelle: "Locations équipements"
    },
    {
      id: 70740000,
      libelle: "Bonis sur reprises et cessions d'em"
    },
    {
      id: 70750000,
      libelle: "Mise à disposition de personnel"
    },
    {
      id: 70760000,
      libelle: "Redevances pour brevets, logiciels,"
    },
    {
      id: 70770000,
      libelle: "Services exploités dans l'intérêt d"
    },
    {
      id: 70780000,
      libelle: "Autres produits accessoires"
    },
    {
      id: 707,
   libelle: "PRODUITS ACCESSOIRES"
    },
    {
      id: 70,
  libelle: "VENTES"
    },
    {
      id: 71100000,
      libelle: "SUR PRODUITS À L'EXPORTATION"
    },
    {
      id: 71200000,
      libelle: "SUR PRODUITS À L'IMPORTATION"
    },
    {
      id: 71300000,
      libelle: "SUR PRODUITS DE PÉRÉQUATION"
    },
    {
      id: 71810000,
      libelle: "Versées par l'État et les collectiv"
    },
    {
      id: 71820000,
      libelle: "Versées par les organismes internat"
    },
    {
      id: 71830000,
      libelle: "Versées par des tiers"
    },
    {
      id: 72100000,
      libelle: "IMMOBILISATIONS INCORPORELLES"
    },
    {
      id: 72200000,
      libelle: "IMMOBILISATIONS CORPORELLES"
    },
    {
      id: 72600000,
      libelle: "IMMOBILISATIONS FINANCIÈRES"
    },
    {
      id: 73410000,
      libelle: "Produits en cours"
    },
    {
      id: 73420000,
      libelle: "Travaux en cours"
    },
    {
      id: 73510000,
      libelle: "Études en cours"
    },
    {
      id: 73520000,
      libelle: "Prestations de services en cours"
    },
    {
      id: 73600000,
      libelle: "VARIATIONS DES STOCKS DE PRODUITS F"
    },
    {
      id: 73710000,
      libelle: "Produits intermédiaires"
    },
    {
      id: 73720000,
      libelle: "Produits résiduels"
    },
    {
      id: 75210000,
      libelle: "Quote-part transférée de pertes (co"
    },
    {
      id: 75250000,
      libelle: "Bénéfices attribués par transfert ("
    },
    {
      id: 75800000,
      libelle: "Produits divers de gestion courant"
    },
    {
      id: 75810000,
      libelle: "Indemnités de fonction et autres ré"
    },
    {
      id: 75820000,
      libelle: "Indemnités d’assurances reçues"
    },
    {
      id: 75880000,
      libelle: "Autres produits divers"
    },
    {
      id: 758",
   libelle: "PRODUITS DIVERS"
    },
    {
      id: 75910000,
      libelle: "sur risques à court terme"
    },
    {
      id: 75930000,
      libelle: "Reprises de charges prov sur stocks"
    },
    {
      id: 75940000,
      libelle: "Reprise de charges prov sur créance"
    },
    {
      id: 75980000,
      libelle: "Reprise autres charges provisionnée"
    },
    {
      id: 759,
   libelle: "REPRISE CHARGES PROV D'EXPL"
    },
    {
      id: 75,
  libelle: "AUTRES PRODUITS"
    },
    {
      id: 77100000,
      libelle: "INTÉRÊTS DE PRÊTS"
    },
    {
      id: 77200000,
      libelle: "REVENUS DE PARTICIPATIONS"
    },
    {
      id: 77300000,
      libelle: "ESCOMPTES OBTENUS"
    },
    {
      id: 77400000,
      libelle: "REVENUS DE PLACEMENT"
    },
    {
      id: 77600000,
      libelle: "GAINS DE CHANGE FINANCIERS"
    },
    {
      id: 77700000,
      libelle: "GAINS SUR CESSIONS DE TITRES DE PLA"
    },
    {
      id: 77810000,
      libelle: "sur rentes viagères"
    },
    {
      id: 77820000,
      libelle: "sur opérations financières"
    },
    {
      id: 77840000,
      libelle: "sur instruments de trésorerie"
    },
    {
      id: 77910000,
      libelle: "sur risques financiers"
    },
    {
      id: 77950000,
      libelle: "sur titres de placement"
    },
    {
      id: 77980000,
      libelle: "autres charges pour dépreciationset"
    },
    {
      id: 78100000,
      libelle: "TRANSFERT DE CHARGE"
    },
    {
      id: 78700000,
      libelle: "TRANSFERT CHARGES FINANCIERE"
    },
    {
      id: 79110000,
      libelle: "pour risques et charges"
    },
    {
      id: 79130000,
      libelle: "pour dépréciation des immobilisatio"
    },
    {
      id: 79140000,
      libelle: "pour dépréciation des immobilisatio"
    },
    {
      id: 79710000,
      libelle: "pour risques et charges"
    },
    {
      id: 79720000,
      libelle: "des immobilisations financières"
    },
    {
      id: 79800000,
      libelle: "REPRISE D'AMORTISSEMENTS"
    },
    {
      id: 7,
     libelle: "TOTAL CLASSE 7"
    },
    {
      id: 81100000,
      libelle: "VNC Cession Immob Incorporelles"
    },
    {
      id: 81200000,
      libelle: "VNC Cession Immob Corporelles"
    },
    {
      id: 81600000,
      libelle: "VNC Cession Immob Financière"
    },
    {
      id: 82100000,
      libelle: "PRODUIT DE CESSION D'IMMOBILISATION"
    },
    {
      id: 82200000,
      libelle: "IMMOBILISATIONS CORPORELLES"
    },
    {
      id: 82600000,
      libelle: "IMMOBILISATIONS FINANCIÈRES"
    },
    {
      id: 83100000,
      libelle: "CHARGES H.A.O. CONSTATÉES"
    },
    {
      id: 83400000,
      libelle: "PERTES SUR CRÉANCES H.A.O."
    },
    {
      id: 83500000,
      libelle: "DONS ET LIBÉRALITÉS ACCORDÉS"
    },
    {
      id: 83600000,
      libelle: "ABANDONS DE CRÉANCES CONSENTIS"
    },
    {
      id: 83900000,
      libelle: "CHARGES POUR DEPRECIATIONS ET PROVI"
    },
    {
      id: 84100000,
      libelle: "PRODUITS H.A.O CONSTATÉS"
    },
    {
      id: 84500000,
      libelle: "DONS ET LIBÉRALITÉS OBTENUS"
    },
    {
      id: 84600000,
      libelle: "ABANDONS DE CRÉANCES OBTENUS"
    },
    {
      id: 84800000,
      libelle: "TRANSFERTS DE CHARGES H.A.O"
    },
    {
      id: 84900000,
      libelle: "REPRISES DES CHARGES POUR DEPRECIAT"
    },
    {
      id: 85100000,
      libelle: "DOTATIONS AUX PROVISIONS RÉGLEMENTÉ"
    },
    {
      id: 85200000,
      libelle: "DOTATIONS AUX AMORT. HAO"
    },
    {
      id: 85300000,
      libelle: "DOTATIONS AUX PROVISIONS POUR DÉPRÉ"
    },
    {
      id: 85400000,
      libelle: "DOTATIONS AUX PROVISIONS POUR RISQU"
    },
    {
      id: 85800000,
      libelle: "AUTRES DOTATIONS H.A.O."
    },
    {
      id: 86100000,
      libelle: "REPRISES DE PROVISIONS RÉGLEMENTÉES"
    },
    {
      id: 86200000,
      libelle: "REPRISES D’AMORTISSEMENTS H.A.O"
    },
    {
      id: 86300000,
      libelle: "REPRISES DE DÉPRÉCIATION H.A.O."
    },
    {
      id: 86400000,
      libelle: "REPRISES DE PROVISIONS POUR RISQUES"
    },
    {
      id: 87100000,
      libelle: "PARTICIPATION LÉGALE AUX BÉNÉFICES"
    },
    {
      id: 87400000,
      libelle: "PARTICIPATION CONTRACTUELLE AUX BÉN"
    },
    {
      id: 87800000,
      libelle: "AUTRES PARTICIPATIONS"
    },
    {
      id: 88100000,
      libelle: "ÉTAT"
    },
    {
      id: 88400000,
      libelle: "COLLECTIVITÉS PUBLIQUES"
    },
    {
      id: 88600000,
      libelle: "GROUPE"
    },
    {
      id: 88800000,
      libelle: "AUTRES"
    },
    {
      id: 89100000,
      libelle: "Impôts sur le bénéfice de l'exercic"
    },
    {
      id: 89110000,
      libelle: "Activités exercées dans l'État"
    },
    {
      id: 89120000,
      libelle: "Activités exercées dans les autres"
    },
    {
      id: 89130000,
      libelle: "Activités exercées hors Région"
    },
    {
      id: 89200000,
      libelle: "RAPPEL D'IMPÔTS SUR RÉSULTATS ANTÉR"
    },
    {
      id: 89500000,
      libelle: "Minimum de perception"
    },
    {
      id: 89550000,
      libelle: "TEST"
    },
    {
      id: 89910000,
      libelle: "Dégrèvements"
    },
    {
      id: 89940000,
      libelle: "Annulations pour pertes rétroactive"
    },
    {
      id: 90110000,
      libelle: "Crédits confirmés obtenus"
    },
    {
      id: 90120000,
      libelle: "Emprunts restant à encaisser"
    },
    {
      id: 90130000,
      libelle: "Facilités de financement renouvella"
    },
    {
      id: 90180000,
      libelle: "Autres engagements de financement o"
    },
    {
      id: 90210000,
      libelle: "Avals obtenus"
    },
    {
      id: 90220000,
      libelle: "Cautions, garanties obtenues"
    },
    {
      id: 90230000,
      libelle: "Hypothèques obtenues"
    },
    {
      id: 90240000,
      libelle: "Effets endossés par des tiers"
    },
    {
      id: 90280000,
      libelle: "Autres garanties obtenues"
    },
    {
      id: 90310000,
      libelle: "Achats de marchandises à terme"
    },
    {
      id: 90320000,
      libelle: "Achats à terme de devises"
    },
    {
      id: 90330000,
      libelle: "Commandes fermes des clients"
    },
    {
      id: 90380000,
      libelle: "Autres engagements réciproques"
    },
    {
      id: 90410000,
      libelle: "Abandons de créances conditionnels"
    },
    {
      id: 90430000,
      libelle: "Ventes avec clause de réserve de pr"
    },
    {
      id: 90480000,
      libelle: "Divers engagements obtenus"
    },
    {
      id: 90510000,
      libelle: "Crédits accordés non décaissés"
    },
    {
      id: 90580000,
      libelle: "Autres engagements de financement a"
    },
    {
      id: 90610000,
      libelle: "Avals accordés"
    },
    {
      id: 90620000,
      libelle: "Cautions, garanties accordées"
    },
    {
      id: 90630000,
      libelle: "Hypothèques accordées"
    },
    {
      id: 90640000,
      libelle: "Effets endossés par l'entité"
    },
    {
      id: 90680000,
      libelle: "Autres garanties accordées"
    },
    {
      id: 90710000,
      libelle: "Ventes de marchandises à terme"
    },
    {
      id: 90720000,
      libelle: "Ventes à terme de devises"
    },
    {
      id: 90730000,
      libelle: "Commandes fermes aux fournisseurs"
    },
    {
      id: 90780000,
      libelle: "Autres engagements réciproques"
    },
    {
      id: 90810000,
      libelle: "Annulations conditionnelles de dett"
    },
    {
      id: 90820000,
      libelle: "Engagements de retraite"
    },
    {
      id: 90830000,
      libelle: "Achats avec clause de réserve de pr"
    },
    {
      id: 90880000,
      libelle: "Divers engagements accordés"
    },
    {
      id: 91100000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS OBTENU"
    },
    {
      id: 91200000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS OBTENU"
    },
    {
      id: 91400000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS OBTENU"
    },
    {
      id: 91600000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS ACCORD"
    },
    {
      id: 91700000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS ACCORD"
    },
    {
      id: 91800000,
      libelle: "CONTREPARTIE DES ENGAGEMENTS ACCORD"
    }
  ]