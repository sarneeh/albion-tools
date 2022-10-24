const fetch = require('isomorphic-fetch')

const config = {
    target: {
        id: 'T4_2H_CLAYMORE',
        tier: 3
    },
    dependencies: [
        { item: '', have: 0 },
        { item: '', have: 0 },
    ]
}

const fetchItem = async itemId => {
    const response = await fetch(`https://gameinfo.albiononline.com/api/gameinfo/items/${itemId}/data`)
    return response.json()
}

const getItemEnchantments = (item, tier) => {
    return item.enchantments.enchantments.find(({ enchantmentLevel }) => enchantmentLevel === tier)
}

const getTopLevelCraftingRequirements = (item, tier) => {
    const enchantment = getItemEnchantments(item, tier);
    return enchantment ? enchantment.craftingRequirements.craftResourceList : null
}

const getCraftingRequirements = craftingRequirements => {

}

const calculateInvestment = async () => {
    const item = await fetchItem(config.target.id)

    // const response = await fetch('https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG.json?locations=Caerleon,Bridgewatch&qualities=2');

    const topLevelRequirements =  getTopLevelCraftingRequirements(item, config.target.tier)
    // const lowLevelRequirements = topLevelRequirements.map(convertTopLevelCraftingRequirementsToLowLevel)

    const test = await fetchItem('T4_METALBAR_LEVEL1@1');

    console.log({ test })
}

calculateInvestment();