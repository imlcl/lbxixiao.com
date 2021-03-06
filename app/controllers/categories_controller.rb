class CategoriesController < ApplicationController
  include TheSortableTreeController::Rebuild

  layout 'admin'
  before_action :authenticate_user!
  before_action :check_admin
  before_action :set_category, only: [:show, :edit, :update, :destroy]
  
  def index
    @categories = Category.nested_set
  end

  def manage
    @categories = Category.nested_set
  end

  # GET /categories/1
  # GET /categories/1.json
  def show
  end

  # GET /categories/new
  def new
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
  end

  # POST /categories
  # POST /categories.json
  def create
    @category = Category.new(category_params)

    respond_to do |format|
      if @category.save
        format.html { redirect_to categories_path, notice: '新建成功' }
      else
        format.html { render action: 'new' }
      end
    end
  end

  # PATCH/PUT /categories/1
  # PATCH/PUT /categories/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to categories_path, notice: '修改成功' }
      else
        format.html { render action: 'edit' }
      end
    end
  end

  # DELETE /categories/1
  # DELETE /categories/1.json
  def destroy
    @category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:title, :parent_id, :lft, :rgt, :ctype_id, :on_top, :image, :image_cache, :remove_image)
    end
end
