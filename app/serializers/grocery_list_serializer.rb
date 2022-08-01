class GroceryListSerializer < ActiveModel::Serializer
  attributes :id, :list_name, :user_id
end
