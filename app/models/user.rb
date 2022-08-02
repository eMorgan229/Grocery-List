class User < ApplicationRecord
    has_many :grocery_lists
    has_secure_password
    #gives us password, password_confirmation and authenticate methods from the above macro

    validates :username, uniqueness: true, presence: true
    validates :password, presence: true

    
end
