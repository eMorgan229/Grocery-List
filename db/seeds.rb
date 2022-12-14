require 'faker'

puts 'Clearing all...'
User.destroy_all
GroceryList.destroy_all
Item.destroy_all
ListItem.destroy_all

puts "creating users..."
5.times do 
    user = User.create!(
        username: Faker::Internet.username(specifier: 5..8),
        password: Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true)
    )
end

puts "creating grocery_list..."
user_ids = User.ids
5.times do 
    list = GroceryList.create!(
        list_name: Faker::Food.dish, 
        user_id: user_ids.sample)
end
    
puts "creating items..."
10.times do 
    Item.create!(item_name: Faker::Food.ingredient, price: Faker::Commerce.price, category: Faker::Food.ethnic_category)
end

puts "creating list_item..."
list_ids = GroceryList.ids
item_ids = Item.ids
5.times do
     listID =list_ids.sample
     itemID = item_ids.sample
     puts "#{listID} is #{itemID}"
    ListItem.create!(grocery_list_id: listID, item_id: itemID) 
end
 
puts "Done seeding!"
