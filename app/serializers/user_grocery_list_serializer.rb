class UserGroceryListSerializer < ActiveModel::Serializer
  attributes :username

  has_many :grocery_lists
end
