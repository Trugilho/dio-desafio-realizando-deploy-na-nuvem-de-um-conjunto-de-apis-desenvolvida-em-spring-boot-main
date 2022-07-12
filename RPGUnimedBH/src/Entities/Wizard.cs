namespace RPGUnimedBH.src.Entities
{
    public class Wizard : Hero
    {
        public Wizard(string Name, int level, string HeroType)
        {
            this.Name = Name;
            this.level = level;
            this.HeroType = HeroType;
        }
        public override string Attack()
        {
            return this.Name + " lançou Magia de Transmutação";
        }
        public string Attack(int Bonus)
        {
            if (Bonus > 6)
            {
                return this.Name + " lançou uma Magia de Transmutação de Matéria com agravamento de " + Bonus;
            }
            else
            {
                return this.Name + " lançou uma Magia de Encantamento com agravamento de " + Bonus;
            }
        }
    }
}