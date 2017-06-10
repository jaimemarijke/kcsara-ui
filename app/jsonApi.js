export const flattenAttributesAndRelationships = jsonApiResourceObject => ({
    id: jsonApiResourceObject.id,
    ...jsonApiResourceObject.attributes,
    ...jsonApiResourceObject.relationships,
});
