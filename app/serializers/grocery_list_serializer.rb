class GroceryListSerializer < ActiveModel::Serializer
  attributes :list_name, :id

  has_many :items
end
