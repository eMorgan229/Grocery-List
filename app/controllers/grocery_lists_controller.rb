class GroceryListsController < ApplicationController
  before_action :set_grocery_list, only: [:show, :update, :destroy]

  # GET /grocery_lists
  def index
    @grocery_lists = GroceryList.all

    render json: @grocery_lists
  end

  # GET /grocery_lists/1
  def show
    render json: @grocery_list
  end

  # POST /grocery_lists
  def create
    @grocery_list = GroceryList.new(grocery_list_params)

    if @grocery_list.save
      render json: @grocery_list, status: :created, location: @grocery_list
    else
      render json: @grocery_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /grocery_lists/1
  def update
    if @grocery_list.update(grocery_list_params)
      render json: @grocery_list
    else
      render json: @grocery_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /grocery_lists/1
  def destroy
    @grocery_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery_list
      @grocery_list = GroceryList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def grocery_list_params
      params.require(:grocery_list).permit(:list_name, :user_id)
    end
end
