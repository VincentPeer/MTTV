const content = [
  {
    title: "Investisseurs ! êtes vous conscients, voulez-vous aller plus loin que l’ESG ?",
    body: "(Environnement, Social, Gouvernance) Les indicateurs traditionnels mesurent les performances… mais pas la vitalité. MTTV ne calcule pas les profits. Il évalue la qualité du signal vivant qui les porte. En analysant la pureté du processus triadique — humain, écosystème, intention — nous identifions les projets dont la performance est durable parce qu’elle est alignée avec les invariants du vivant global. Ce n’est pas une méthode ESG. C’est une écologie du rendement."
  },
  {
    title: "Fonds d'investissement : un avantage compétitif fondé sur une compréhension profonde.",
    body: "Le marché réagit aux données. Le vivant réagit à la cohérence. La plupart des outils financiers voient le bruit. MTTV capte le signal. En formalisant les invariants du vivant — silences, rythmes, résonances — nous offrons une cartographie inédite de la résilience réelle. Investir avec MTTV, c’est ne plus spéculer sur des chiffres… mais sur des dynamiques vivantes qui, elles, ne mentent pas."
  },
  {
    title: "Investisseurs ! Voulez-vous réconcilier votre éthique avec vos performances ?",
    body: "Vous ne voulez pas financer la dégradation… mais vous ne voulez pas non plus sacrifier vos rendements. MTTV est la première approche qui relie votre intention éthique à une mesure objective du vivant. Pas de greenwashing. Pas de bilans flous. Juste une évaluation précise : à quel point votre capital participe-t-il à une intégration harmonieuse entre humains, nature et intelligence ? Parce que le meilleur investissement n’est pas celui qui rapporte le plus… mais celui qui ne détruit pas ce qui rend tout rendement possible."
  }
];

export const formattedDescription = content.map((item, index) => (
  <div key={index} className="description-paragraph">
    <h3 className="description-title">{item.title}</h3>
    <p className="description-body">{item.body}</p>
  </div>
));
